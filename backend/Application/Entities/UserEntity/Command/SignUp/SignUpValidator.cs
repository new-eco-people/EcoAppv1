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
                                    .Must(CommonValidation.BeAValidPassword).WithMessage(CommonValidation.ValidPasswordErrorMessage);

            RuleFor(x => x.EmailAddress).NotEmpty().WithMessage("Email is required").EmailAddress().WithMessage("Email is invalid");
            
            RuleFor(x => x.EmailAddress).MustAsync(async (x, email, y) => await auth.EmailAvailable(x.EmailAddress))
                                 .WithMessage(x => $"{x.EmailAddress} has been taken");

            RuleFor(x => x.AgreeToTermsAndCondition).Equal(true).WithMessage("Agree to our terms and condition to continue");
        }
    }
}