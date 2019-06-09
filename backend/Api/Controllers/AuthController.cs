using System.Net;
using System.Threading.Tasks;
using Application.Entities.UserEntity.Command.SignUp;
using Application.Entities.UserEntity.Command.VerifyEmail;
using Application.Entities.UserEntity.Query.SendConfirmEmail;
using Application.Entities.UserEntity.Query.SignIn;
using Application.Infrastructure.RequestResponsePipeline;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : BaseController
    {
        /// <summary>
        /// Verify and confirm email via token
        /// </summary>
        /// <remarks>Good!</remarks>
        /// <response code="200">Email Comfirmed</response>
        /// <response code="400">Failed to verify email, providing error message</response>
        [AllowAnonymous]
        [HttpPost("verifyemail")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.BadRequest)]
        public async Task<IActionResult> VerifyEmail(VerifyEmailCommand command) {
            return Ok(await Mediator.Send(command));
            // return Ok(new object());
        }

        /// <summary>
        /// Sign up a user to the platform
        /// </summary>
        /// <remarks>Good!</remarks>
        /// <response code="200">Signed up user with email sent</response>
        /// <response code="400">Failed to sign up user with error message</response>
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.BadRequest)]
        [AllowAnonymous]
        [HttpPost("signup")]
        public async Task<IActionResult> RegisterUser(SignUpCommand command) {
            return Ok(await Mediator.Send(command));
            // return Ok(command);
        }

        /// <summary>
        /// Sign in a user to the platform
        /// </summary>
        /// <remarks>Good!</remarks>
        /// <response code="200">Signed in user to platformt</response>
        /// <response code="404">Failed to sign up user with error message</response>
        [ProducesResponseType(typeof(SignInModel), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.NotFound)]
        [AllowAnonymous]
        [HttpPost("signin")]
        public async Task<IActionResult> SignIn(SignInCommand command) {
            return Ok(await Mediator.Send(command));
            // return Ok(command);
        }

        /// <summary>
        /// Request to send email confirmation link to user
        /// </summary>
        /// <remarks>Good!</remarks>
        /// <response code="200">Email has been sent hopefully</response>
        /// <response code="400">Failed to send email with error message</response>
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(ErrorResponse), (int)HttpStatusCode.BadRequest)]
        [AllowAnonymous]
        [HttpGet("resend-confirm-email")]
        public async Task<IActionResult> SendConfirmationEmail([FromQuery] SendConfirmEmailCommand command) {
            return Ok(await Mediator.Send(command));
            // return Ok(email);
        }
    }
}