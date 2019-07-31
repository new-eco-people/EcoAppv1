using System;
using System.Net;
using Application.Interfaces.IExceptions;

namespace Application.Exceptions
{
    public class ConfirmEmailException : Exception, IGeneralException
    {
        public ConfirmEmailException(string emailAddress)
            : base($"\"{emailAddress}\" has not been confirmed")
        {
            StatusCode = HttpStatusCode.FailedDependency;
        }

        public HttpStatusCode StatusCode { get; set; }
    }
}