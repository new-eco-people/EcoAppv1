using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces.IRepositories;
using AutoMapper;
using Domain.Entities.CoreEntities;
using MediatR;

namespace Application.Entities.LocationEntity.Query.GetStates
{
    public class GetStateCommand : IRequest<ICollection<StateDTO>>
    { 
        public string CountryId { get; set; }
    }

    public class GetStateHandler : IRequestHandler<GetStateCommand, ICollection<StateDTO>>
    {
        public ILocationRepository _location { get; set; }
        public IMapper _mapper { get; set; }

        public GetStateHandler(ILocationRepository location, IMapper mapper)
        {
            _location = location;
            _mapper = mapper;
        }

        public async Task<ICollection<StateDTO>> Handle(GetStateCommand request, CancellationToken cancellationToken)
        {
            return _mapper.Map<ICollection<State>, ICollection<StateDTO>>(await _location.GetStates(request.CountryId));
        }
    }
}