using FluentValidation;

namespace Application.Entities.UserEntity.Query.SendConfirmEmail
{
    public class SendConfirmEmailValidator : AbstractValidator<SendConfirmEmailCommand>
    {
        public SendConfirmEmailValidator()
        {
            RuleFor(e => e.Email)
                .NotEmpty()
                .EmailAddress();
        }
    }
}