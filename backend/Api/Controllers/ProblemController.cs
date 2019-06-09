using System.Threading.Tasks;
using Application.Entities.ProblemEntity.Command.CreateProblem;
using Application.Entities.ProblemEntity.Query;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProblemController : BaseController
    {
        // [AllowAnonymous]
        // [HttpPost]
        // public async Task<IActionResult> CreateProblem(CreateProblemCommand command) {
        //     // return Ok(await Mediator.Send());
        //     return Ok(command);
        //     // return Ok( new ProblemsRepo().getCsv() );
        // }
    }
}