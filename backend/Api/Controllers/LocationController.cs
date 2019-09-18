using System.Net;
using System.Threading.Tasks;
using Application.Entities.LocationEntity.Query.GetCountries;
using Application.Entities.LocationEntity.Query.GetStates;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LocationController : BaseController
    {
        /// <summary>
        /// Return all the countries in world
        /// </summary>
        /// <remarks>Good!</remarks>
        [HttpGet("get-countries")]
        [ProducesResponseType(typeof(CountriesDTO), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetCountries() {
            return Ok(await Mediator.Send(new GetCountriesCommand()));
            // return Ok(new object());
        }

        /// <summary>
        /// Return all the state in world
        /// </summary>
        /// <remarks>Good!</remarks>
        [HttpGet("get-states")]
        [ProducesResponseType(typeof(StateDTO), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> GetState([FromQuery] GetStateCommand command) {
            return Ok(await Mediator.Send(command));
            // return Ok(new object());
        }
    }
}