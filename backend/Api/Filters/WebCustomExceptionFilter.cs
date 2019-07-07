using System;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Application.Exceptions;
using System.Collections.Generic;
using FluentValidation;
using System.Threading.Tasks;
using System.Threading;
using System.Linq;
using FluentValidation.Results;
using Application.Infrastructure.RequestResponsePipeline;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Api.Filters
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class WebCustomExceptionFilter : ExceptionFilterAttribute
    {
        private readonly IHostingEnvironment _env;

        public WebCustomExceptionFilter(IHostingEnvironment ienv)
        {
            _env = ienv;
        }
        public override void OnException(ExceptionContext context)
        {
            var jsonSerializerSettings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };
            
            System.Console.WriteLine(context.Exception.ToString());
            if (context.Exception is Application.Exceptions.ValidationException)
            {
                context.HttpContext.Response.ContentType = "application/json";
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                context.Result = new JsonResult(
                    new ErrorResponse() {
                        Errors = ((Application.Exceptions.ValidationException)context.Exception).Failures
                    },
                    jsonSerializerSettings
                );

                return;
            }

            var code = HttpStatusCode.InternalServerError;

            if (context.Exception is NotFoundException)
            {
                code = HttpStatusCode.NotFound;
            }

            if (context.Exception is CreationFailureException)
            {
                code = HttpStatusCode.BadRequest;
            }

            var errorresponse = new ErrorResponse() { Error =  context.Exception.Message };

            errorresponse.StackTrace = _env.IsDevelopment() || _env.IsStaging() ? context.Exception.StackTrace : null;

            context.HttpContext.Response.ContentType = "application/json";
            context.HttpContext.Response.StatusCode = (int)code;
            context.Result = new JsonResult(errorresponse, jsonSerializerSettings);
        }
    }
}
