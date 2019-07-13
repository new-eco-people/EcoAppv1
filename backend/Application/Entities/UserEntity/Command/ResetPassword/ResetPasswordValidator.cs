using Application.Infrastructure.Validations;
using FluentValidation;

namespace Application.Entities.UserEntity.Command.ResetPassword
{
    public class ChangePasswordValidator : AbstractValidator<ResetPasswordCommand>
    {
        public ChangePasswordValidator()
        {
            RuleFor(x => x.Token).NotEmpty().WithMessage("An error occurred, please try again later");
            RuleFor(x => x.UserId).NotEmpty().WithMessage("An error occurred, please try again later");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Password is required");
                                    // .Must(CommonValidation.BeAValidPassword).WithMessage(CommonValidation.ValidPasswordErrorMessage);

        }
    }
}