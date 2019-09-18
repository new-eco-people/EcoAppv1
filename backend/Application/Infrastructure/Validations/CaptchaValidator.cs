using Application.Interfaces.IServices;
using FluentValidation;

namespace Application.Infrastructure.Validations
{

    public class CaptchaCredentials
    {
        public string Id { get; set; }
        public string Code { get; set; }
    }

    public class CaptchaValidator<T> : AbstractValidator<T> where T : CaptchaCredentials
    {
        private ICaptchaService _captcha;
        public CaptchaValidator(ICaptchaService captcha)
        {
            _captcha = captcha;

            RuleFor(x => x.Code).NotEmpty().WithMessage("Captcha is required")
                                .Must((x, code) => _captcha.Ishuman(x.Id, x.Code)).WithMessage("Invalid Captcha");
        }
    }
}