using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Exceptions;
using Application.Interfaces.IRepositories;
using Domain.Entities;
using MediatR;

namespace Application.Entities.UserEntity.Command.VerifyEmail
{
    public class VerifyEmailCommand : IRequest<bool>
    {
        public string UserId { get; set; }
        public string Token { get; set; }
    }

    public class VerifyEmailHandler : IRequestHandler<VerifyEmailCommand, bool>
    {
        private readonly IAuthRepository _auth;

        public VerifyEmailHandler(IAuthRepository auth)
        {
            _auth = auth;
        }
        public async Task<bool> Handle(VerifyEmailCommand request, CancellationToken cancellationToken)
        {
            return await _auth.VerifyEmail(request.UserId, WebUtility.UrlDecode(request.Token));   
        }
    }
}