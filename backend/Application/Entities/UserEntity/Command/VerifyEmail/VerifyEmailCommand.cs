using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Exceptions;
using Application.Interfaces.IRepositories;
using Domain.Entities;
using MediatR;

namespace Application.Entities.UserEntity.Command.VerifyEmail
{
    public class VerifyEmailCommand : IRequest<Unit>
    {
        public string UserId { get; set; }
        public string Token { get; set; }
    }

    public class VerifyEmailHandler : IRequestHandler<VerifyEmailCommand, Unit>
    {
        private readonly IAuthRepository _auth;

        public VerifyEmailHandler(IAuthRepository auth)
        {
            _auth = auth;
        }
        public async Task<Unit> Handle(VerifyEmailCommand request, CancellationToken cancellationToken)
        {
            var result = await _auth.VerifyEmail(request.UserId, WebUtility.UrlDecode(request.Token));

            if (result)
                return Unit.Value;

            throw new CustomMessageException("Verification failed, please try again");
        }
    }
}