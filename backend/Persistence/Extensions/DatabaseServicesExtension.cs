using Application.Interfaces.IRepositories;
using Microsoft.Extensions.DependencyInjection;
using Persistence.Repository;

namespace Persistence.Extensions
{
    public static class DatabaseServicesExtension
    {
        public static void ImplementApplicationDatabaseInterfaces(this IServiceCollection services) {
            // Add Auth Repository
            services.AddTransient<IAuthRepository, AuthRepository>();
        }
    }
}