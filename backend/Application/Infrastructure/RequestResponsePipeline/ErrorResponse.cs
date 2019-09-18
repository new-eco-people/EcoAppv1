using Newtonsoft.Json;

namespace Application.Infrastructure.RequestResponsePipeline
{
    public class ErrorResponse
    {
        [JsonProperty("errors")]
        public object Errors { get; set; }

        [JsonProperty("error")]
        public string Error { get; set; }

        [JsonProperty("stackTrace")]
        public string StackTrace { get; set; }
    }
}