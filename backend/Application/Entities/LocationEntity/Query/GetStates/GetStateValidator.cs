using FluentValidation;

namespace Application.Entities.LocationEntity.Query.GetStates
{
    public class GetStateValidator : AbstractValidator<GetStateCommand>
    {
        public GetStateValidator()
        {
            RuleFor(x => x.CountryId).NotEmpty().WithMessage("Country Id required");
        }
    }
}