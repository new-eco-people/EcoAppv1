using Application.Infrastructure.Validations;
using Application.Interfaces.IRepositories;
using FluentValidation;

namespace Application.Entities.UserEntity.Command.SignUp
{
    public class SignUpValidator : AbstractValidator<SignUpCommand>
    {
        public SignUpValidator(IAuthRepository auth)
        {
            RuleFor(x => x.FirstName).NotEmpty().WithMessage("First Name is required");

            RuleFor(x => x.LastName).NotEmpty().WithMessage("Last Name is required");

            RuleFor(x => x.Password).NotEmpty().WithMessage("Password is required")
                                    .Must(CommonValidation.BeAValidPassword).WithMessage("Min 5 chars with one lowercase, uppercase, special char, number");

            RuleFor(x => x.EmailAddress).MustAsync(async (x, email, y) => await auth.UsernameOrEmailAvailable(x.EmailAddress))
                                 .WithMessage(x => $"{x.EmailAddress} has already been taken");

            RuleFor(x => x.EmailAddress).NotEmpty().WithMessage("Email is required").EmailAddress().WithMessage("Email is invalid");

            RuleFor(x => x.Username).NotEmpty().WithMessage("Username is required");

            RuleFor(x => x.Username).MustAsync(async (x, username, y) => await auth.UsernameOrEmailAvailable(x.Username))
                                    .WithMessage(x => $"{x.Username} has already been taken");

            RuleFor(x => x.AgreeToTermsAndCondition).Equal(true).WithMessage("Agree to our terms and condition to continue");
        }
    }
}