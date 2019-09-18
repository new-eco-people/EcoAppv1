using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Entities.CoreEntities;

namespace Application.Interfaces.IRepositories
{
    public interface ILocationRepository
    {
        Task<ICollection<Country>> GetCountries();
        Task<ICollection<State>> GetStates(string CountryId);
    }
}