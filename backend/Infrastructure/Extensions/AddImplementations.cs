using Application.Interfaces.IServices;
using Infrastructure.Implementation;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Extensions
{
    public static class AddImplementations
    {
        public static void AddInfractureServices(this IServiceCollection services) 
        {
            // Add the implementations to be used
            services.AddScoped<IEmailService, EmailService>();
        }
    }
}