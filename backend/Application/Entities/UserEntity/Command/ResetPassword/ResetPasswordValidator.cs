using Application.Infrastructure.Validations;
using Application.Interfaces.IServices;
using FluentValidation;

namespace Application.Entities.UserEntity.Command.ResetPassword
{
    public class ChangePasswordValidator : CaptchaValidator<ResetPasswordCommand>
    {
        public ChangePasswordValidator(ICaptchaService captcha) : base(captcha)
        {
            RuleFor(x => x.Token).NotEmpty().WithMessage("An error occurred, please try again later");
            RuleFor(x => x.UserId).NotEmpty().WithMessage("An error occurred, please try again later");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Password is required");
                                    // .Must(CommonValidation.BeAValidPassword).WithMessage(CommonValidation.ValidPasswordErrorMessage);

        }
    }
}