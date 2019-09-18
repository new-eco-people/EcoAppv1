using System;

namespace Application.Exceptions
{
    public class CustomMessageException : Exception
    {
        public CustomMessageException(string message)
            :base(message)
        {
        }
    }
}