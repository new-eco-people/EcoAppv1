using FluentValidation;

namespace Application.Entities.UserEntity.Query.SignIn
{
    public class SignInValidator : AbstractValidator<SignInCommand>
    {
        public SignInValidator()
        {
            RuleFor(x => x.UserNameEmail).NotEmpty();
            RuleFor(x => x.Password).NotEmpty();
        }
    }
}