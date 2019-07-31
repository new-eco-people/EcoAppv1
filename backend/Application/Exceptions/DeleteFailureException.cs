using System;
using System.Net;
using Application.Interfaces.IExceptions;

namespace Application.Exceptions
{
    public class DeleteFailureException : Exception, IGeneralException
    {
        
        public HttpStatusCode StatusCode { get; set; }
        public DeleteFailureException(string name, object key, string message)
            : base($"Deletion of entity \"{name}\" ({key}) failed. {message}")
        {
            StatusCode = HttpStatusCode.NoContent;
        }
    }
}