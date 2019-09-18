using Newtonsoft.Json;

namespace Infrastructure.Implementation.Email
{
    public class EmailObjects
    {}

    public class VerifyEmailObject
    {
        [JsonProperty("firstname")]
        public string FirstName { get; set; }

        [JsonProperty("url")]
        public string Url { get; set; }
    }
}