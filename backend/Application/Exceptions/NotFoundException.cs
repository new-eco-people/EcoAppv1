using System;
using System.Net;
using Application.Interfaces.IExceptions;

namespace Application.Exceptions
{
    public class NotFoundException : Exception, IGeneralException
    {
        public HttpStatusCode StatusCode { get; set; }

        public NotFoundException(string name, object key)
            : base($"Entity \"{name}\" ({key}) was not found.")
        {
            StatusCode = HttpStatusCode.NotFound;
        }
    }
}