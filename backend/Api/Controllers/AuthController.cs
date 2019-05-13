using System.Threading.Tasks;
using Application.Entities.UserEntity.Command.SignUp;
using Application.Entities.UserEntity.Query.SignIn;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : BaseController
    {
        [HttpPost("signup")]
        public async Task<IActionResult> RegisterUser(SignUpCommand command) {
            return Ok(await Mediator.Send(command));
            // return Ok(command);
        }

        [HttpPost("signin")]
        public async Task<IActionResult> SignIn(SignInCommand command) {
            return Ok(await Mediator.Send(command));
            // return Ok(command);
        }
    }
}