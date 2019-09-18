using FluentValidation;

namespace Application.Entities.UserEntity.Command.VerifyEmail
{
    public class VerifyEmailValidator : AbstractValidator<VerifyEmailCommand>
    {

        public VerifyEmailValidator()
        {
            RuleFor(x => x.UserId).NotEmpty();
            RuleFor(x => x.Token).NotEmpty();
        }
        
    }
}