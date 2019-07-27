using Application.Infrastructure.Validations;
using Application.Interfaces.IServices;
using FluentValidation;

namespace Application.Entities.UserEntity.Query.SendForgotPasswordEmail
{
    public class SendForgotPasswordEmailValidator : CaptchaValidator<SendForgotPasswordEmailCommand>
    {
        public SendForgotPasswordEmailValidator(ICaptchaService captcha) : base(captcha)
        {
            RuleFor(e => e.EmailAddress)
                .NotEmpty().WithMessage("Email is required")
                .EmailAddress().WithMessage("Email is invalid");
        }
    }
}