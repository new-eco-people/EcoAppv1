using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces.IRepositories;
using AutoMapper;
using Domain.Entities.CoreEntities;
using MediatR;

namespace Application.Entities.LocationEntity.Query.GetCountries
{
    public class GetCountriesCommand : IRequest<ICollection<CountriesDTO>>
    { }

    public class GetCountriesHandler : IRequestHandler<GetCountriesCommand, ICollection<CountriesDTO>>
    {
        public ILocationRepository _location { get; set; }
        public IMapper _mapper { get; set; }
        public GetCountriesHandler(ILocationRepository location, IMapper mapper)
        {
            _location = location;
            _mapper = mapper;
        }
        public async Task<ICollection<CountriesDTO>> Handle(GetCountriesCommand request, CancellationToken cancellationToken)
        {   
            return _mapper.Map<ICollection<Country>, ICollection<CountriesDTO>>(await _location.GetCountries());
        }
    }
}