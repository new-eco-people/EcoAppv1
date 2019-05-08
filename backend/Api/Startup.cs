using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Api.Filters;
using Application.Entities.UserEntity.Command.SignUp;
using Application.Infrastructure.AutoMapper;
using Application.Infrastructure.RequestResponsePipeline;
using AutoMapper;
using FluentValidation.AspNetCore;
using Infrastructure.Extensions;
using MediatR;
using MediatR.Pipeline;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Persistence.Extensions;
using Swashbuckle.AspNetCore.Swagger;

namespace Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment ienv)
        {                           
            Configuration = configuration;  
            env = ienv;
        }

        public IConfiguration Configuration { get; }
        private readonly IHostingEnvironment env;

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
             // Configure Database and Microsoft Identity
            services.ConfigureDatabaseConnections(
                Environment.GetEnvironmentVariable("DefaultConnection"),
                "Api",
                env.IsProduction()
            );

            // Handling Application Exceptions on the Web
            services.AddMvc(options => {
                    options.Filters.Add(typeof(WebCustomExceptionFilter));
                })
            .SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
            // For performing validation of user data before using in the application
            .AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<SignUpValidator>());

             //Add Mediator
            services.AddMediatR();
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestPreProcessorBehavior<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestPerformanceBehaviour<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestValidationBehavior<,>));
     
             // Add DataContext implementation of Application interfaces
            services.ImplementApplicationDatabaseInterfaces();
            //
            // Add Infrastructure implementation of Application interfaces
            services.AddInfractureServices();

            // Add AutoMapper
            services.AddAutoMapper(new Assembly[] { typeof(AutoMapperProfile).GetTypeInfo().Assembly });

            if (env.IsDevelopment())
            {
                // Add swagger
                services.AddSwaggerGen(c =>
                {
                    c.SwaggerDoc("v1", new Info { Title = "ECO API", Version = "v1" });
                });
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseSwagger();
                // specifying the Swagger JSON endpoint.
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("swagger/v1/swagger.json", "My API V1");
                    c.RoutePrefix = string.Empty;
                });

            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            // Make sure the database is created and the migration that was created is up to date
            app.EnsureDatabaseAndMigrationsExtension();

            // app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
