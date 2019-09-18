using Application.Infrastructure.Validations;
using Application.Interfaces.IServices;
using FluentValidation;

namespace Application.Entities.UserEntity.Query.SendConfirmEmail
{
    public class SendConfirmEmailValidator : CaptchaValidator<SendConfirmEmailCommand>
    {
        public SendConfirmEmailValidator(ICaptchaService captcha) : base(captcha)
        {
            RuleFor(e => e.EmailAddress)
                .NotEmpty().WithMessage("Email is required")
                .EmailAddress().WithMessage("Email is invalid");
        }
    }
}