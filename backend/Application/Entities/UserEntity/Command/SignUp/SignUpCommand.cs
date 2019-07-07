using System.Threading;
using System.Threading.Tasks;
using Application.Exceptions;
using Application.Interfaces.IRepositories;
using Domain.Entities;
using MediatR;

namespace Application.Entities.UserEntity.Command.SignUp
{
    public class SignUpCommand : IRequest<Unit>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public bool? AgreeToTermsAndCondition { get; set; }
    }

    public class SignUpHandler : IRequestHandler<SignUpCommand, Unit>
    {
        private readonly IAuthRepository _auth;
        private readonly IMediator _mediator;

        public SignUpHandler(IAuthRepository auth, IMediator mediator)
        {
            _auth = auth;
            _mediator = mediator;
        }
        public async Task<Unit> Handle(SignUpCommand request, CancellationToken cancellationToken)
        {
            var newUser = new User() {
                Email = request.Email,
                UserName = request.Username,
                AgreeToTermsAndCondition = request.AgreeToTermsAndCondition.Value,
                UserDetail = new UserDetail() {
                    FirstName = request.FirstName,
                    LastName = request.LastName
                }
            };

            var result = await _auth.SignUp(newUser,request.Password);

            if (result.User == null)
                throw new CreationFailureException(nameof(User), result.Errors);

            await _mediator.Publish(new UserCreated() { SignUpResult = result });
            return Unit.Value;
        }
    }

    public class SignUpResult 
    {
        public string Errors { get; set; }
        public User User { get; set; }
        public string EmailVerificationToken { get; set; }
    }
}