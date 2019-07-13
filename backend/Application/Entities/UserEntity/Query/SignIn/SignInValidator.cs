using FluentValidation;

namespace Application.Entities.UserEntity.Query.SignIn
{
    public class SignInValidator : AbstractValidator<SignInCommand>
    {
        public SignInValidator()
        {
            RuleFor(x => x.EmailAddress).NotEmpty().WithMessage("Email is required").EmailAddress().WithMessage("Email is invalid");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Password is required");
        }
    }
}