using System.Net;

namespace Application.Interfaces.IExceptions
{
    public interface IGeneralException
    {
        HttpStatusCode StatusCode { get; set; }
    }
}