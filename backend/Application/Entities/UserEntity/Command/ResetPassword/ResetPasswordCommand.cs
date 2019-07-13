using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Exceptions;
using Application.Interfaces.IRepositories;
using MediatR;

namespace Application.Entities.UserEntity.Command.ResetPassword
{
    public class ResetPasswordCommand : IRequest<Unit>
    {
        public string UserId { get; set; }
        public string Token { get; set; }
        public string Password { get; set; }
    }

    public class ResetPasswordHandler : IRequestHandler<ResetPasswordCommand, Unit>
    {
        private readonly IAuthRepository _auth;
        private readonly IMediator _mediator;

        public ResetPasswordHandler(IAuthRepository auth, IMediator mediator)
        {
            _auth = auth;
            _mediator = mediator;
        }
        public async Task<Unit> Handle(ResetPasswordCommand request, CancellationToken cancellationToken)
        {
            var result = await _auth.VarifyAndChangeUserPassword(request.Token, request.UserId, request.Password);

            if (!string.IsNullOrEmpty(result.Errors))
                throw new CustomMessageException(result.Errors);


            await _mediator.Publish( new PasswordResetMade() { EmailData = result });

            return Unit.Value;
        }
    }

}