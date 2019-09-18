using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Domain.Entities.CoreEntities;

namespace Application.Entities.LocationEntity.Query.GetStates
{
    public class StateDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }   

        public static Expression<Func<State, StateDTO>> Projection
        {
            get
            {
                return State => new StateDTO
                {
                    Id = State.Id,
                    Name = State.Name
                };
            }
        }

        public static StateDTO Create(State state) 
        {
            return Projection.Compile().Invoke(state);
        }
    }
}