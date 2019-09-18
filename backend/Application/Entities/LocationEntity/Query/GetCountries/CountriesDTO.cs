using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Domain.Entities.CoreEntities;

namespace Application.Entities.LocationEntity.Query.GetCountries
{
    public class CountriesDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public static Expression<Func<Country, CountriesDTO>> Projection
        {
            get
            {
                return Country => new CountriesDTO
                {
                    Id = Country.Id,
                    Name = Country.Name
                };
            }
        }

        public static CountriesDTO Create(Country country) 
        {
            return Projection.Compile().Invoke(country);
        }
    }
}