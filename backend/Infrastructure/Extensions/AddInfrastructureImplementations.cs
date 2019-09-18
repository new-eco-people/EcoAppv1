using Application.Interfaces.IServices;
using Infrastructure.Implementation.Email;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Extensions
{
    public static class AddInfrastructureImplementations
    {
        public static void AddInfractureServices(this IServiceCollection services) 
        {
            // Add the implementations to be used
            services.AddScoped<IEmailService, EmailService>();
        }
    }
}