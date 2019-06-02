using System.Threading.Tasks;
using Application.Entities.UserEntity.Command.SignUp;
using Application.Entities.UserEntity.Query.SignIn;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : BaseController
    {
        [AllowAnonymous]
        [HttpPost("signup")]
        public async Task<IActionResult> RegisterUser(SignUpCommand command) {
            return Ok(await Mediator.Send(command));
            // return Ok(command);
        }

        [AllowAnonymous]
        [HttpPost("signin")]
        public async Task<IActionResult> SignIn(SignInCommand command) {
            return Ok(await Mediator.Send(command));
            // return Ok(command);
        }
    }
}