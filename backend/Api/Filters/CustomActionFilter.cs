using System;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Api.Filters
{
    public class CustomActionFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
             if (!context.ModelState.IsValid)
            {
               throw new Exception("Error");
            }

            base.OnActionExecuting(context);
        }

    }
}