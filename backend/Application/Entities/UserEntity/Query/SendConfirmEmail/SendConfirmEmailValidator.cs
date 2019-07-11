using FluentValidation;

namespace Application.Entities.UserEntity.Query.SendConfirmEmail
{
    public class SendConfirmEmailValidator : AbstractValidator<SendConfirmEmailCommand>
    {
        public SendConfirmEmailValidator()
        {
            RuleFor(e => e.EmailAddress)
                .NotEmpty().WithMessage("Email is required")
                .EmailAddress().WithMessage("Email is invalid");
        }
    }
}