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

namespace Api.Filters
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class WebCustomExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            if (context.Exception is CustomValidationException)
            {
                context.HttpContext.Response.ContentType = "application/json";
                context.HttpContext.Response.StatusCode = (int)HttpStatusCode.NoContent;
                context.Result = new JsonResult(
                ((CustomValidationException)context.Exception).Failures);

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

            context.HttpContext.Response.ContentType = "application/json";
            context.HttpContext.Response.StatusCode = (int)code;
            context.Result = new JsonResult(new
            {
                error = new[] { context.Exception.Message },
                stackTrace = context.Exception.StackTrace
            });
        }
    }
}
