using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces.IRepositories;
using Domain.Entities.CoreEntities;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Repository
{
    public class LocationRepository : ILocationRepository
    {
        public readonly int _allState = 247;
        public DefaultDataContext _dataContext { get; set; }
        public LocationRepository(DefaultDataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<ICollection<Country>> GetCountries()
        {
            return await _dataContext.Countries.ToListAsync();
        }

        public async Task<ICollection<State>> GetStates(string CountryId)
        {
            return await _dataContext.States.Where(s => s.CountryId.ToString() == CountryId || s.CountryId == _allState).ToListAsync();
        }


    }
}