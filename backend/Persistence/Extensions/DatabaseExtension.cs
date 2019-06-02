using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Persistence.Repository;
using Microsoft.AspNetCore.Builder;
using System;
using System.Linq;
using System.IO;
using Newtonsoft.Json;
using System.Collections.Generic;
using Domain.Entities.CoreEntities;

namespace Persistence.Extensions
{
    public static class DatabaseExtension
    {
        private static string initialDir = "../Persistence/data/";
        public static void ConfigureDatabaseConnections(this IServiceCollection services, string connectionString, string assemblyName, bool Staging) {
            
            // Using MSSQL, But any connection can be used in this case
            // Simply add the extension for the Database from Nuget, 
            // change the method in x.UseSqlServer to the desired method
            // Configure the connection string in appsettings.json
            // If chosen DB in Production is different from Development, youll have to download to right api for them
            if (Staging) {
                // Using MS SQL for Production
                services.AddDbContext<DefaultDataContext>(x => x.UseSqlite(
                        connectionString, b => b.MigrationsAssembly(assemblyName)
                ));
            } else {
                // Using MS SQL for Development
                services.AddDbContext<DefaultDataContext>(x => x.UseSqlServer(
                        connectionString, b => b.MigrationsAssembly(assemblyName)
                ));
            }

            // Configure Identity if required else comment this code
            services.ConfigureIdentity();
        }

//          public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
//  {
//       using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
//       {
//             var context = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
//             context.Database.Migrate();
//       }

        public static void EnsureDatabaseAndMigrationsExtension(this IApplicationBuilder app) {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
                {
                    var context = serviceScope.ServiceProvider.GetRequiredService<DefaultDataContext>();
                    context.Database.Migrate();
                }
        }


        public static IApplicationBuilder SeedLocationsToDatabase(this IApplicationBuilder app) { 
            IServiceProvider serviceProvider = app.ApplicationServices.CreateScope().ServiceProvider; 
            try 
            { 
                var context = serviceProvider.GetService<DefaultDataContext>(); 
                InsertSeedData(context); 
            } 
            catch (Exception ex) 
            {
                throw new Exception(ex.Message);
                // var logger = serviceProvider.GetRequiredService<ILogger<Program>>(); 
                // logger.LogError(ex, "An error occurred while seeding the database."); 
            } 
            return app; 
        } 

        private static void InsertSeedData(DefaultDataContext context) { 

            // AllRegion(context);

            
            var locations = $"{initialDir}locations/";

            if (!context.Countries.Any()) { 

                using (StreamReader jsonData = new StreamReader(Path.Combine(Path.GetFullPath($"{locations}Countries.json")))){
                    var Countries = JsonConvert.DeserializeObject<List<Country>>(jsonData.ReadToEnd());
                    Countries.ForEach(s => context.Countries.Add(s));
                    
                }

                using (StreamReader jsonData = new StreamReader(Path.Combine(Path.GetFullPath($"{locations}States.json")))){
                    var States = JsonConvert.DeserializeObject<List<State>>(jsonData.ReadToEnd());
                    States.ForEach(s => context.States.Add(s));

                }

                context.SaveChanges();
            } 

            // context.SaveChanges();
        }

    }
}