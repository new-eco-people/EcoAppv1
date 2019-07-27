using Api.Infrastructure.Captcha;
using Application.Interfaces.IServices;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Infrastructure
{
    public static class AddAPIImplementation
    {
        public static void AddAPIServices(this IServiceCollection services) 
        {
            // Add the implementations to be used
            services.AddScoped<ICaptchaService, CaptchaService>();
        }
    }
}