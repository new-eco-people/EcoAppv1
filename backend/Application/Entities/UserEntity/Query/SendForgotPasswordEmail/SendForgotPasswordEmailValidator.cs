using FluentValidation;

namespace Application.Entities.UserEntity.Query.SendForgotPasswordEmail
{
    public class SendForgotPasswordEmailValidator : AbstractValidator<SendForgotPasswordEmailCommand>
    {
        public SendForgotPasswordEmailValidator()
        {
            RuleFor(e => e.EmailAddress)
                .NotEmpty().WithMessage("Email is required")
                .EmailAddress().WithMessage("Email is invalid");
        }
    }
}