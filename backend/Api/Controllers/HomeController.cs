using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : BaseController
    {
        /// <summary>
        /// Get 10 problem feeds based on filter passwd
        /// </summary>
        /// <response code="200">10 feeds</response>
        /// <response code="401">Unauthorized user</response>
        [HttpGet("problem-feeds")]
        // [ProducesResponseType(typeof(VerfiyEmailResult), (int)HttpStatusCode.OK)]
        // [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> ProblemFeeds() {
            // return Ok(await Mediator.Send(command));
            await Task.Delay(100);
            return Ok(new {feeds = "feeds"});
        }
    }
}