using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Exceptions;
using Application.Interfaces.IRepositories;
using Domain.Entities;
using MediatR;

namespace Application.Entities.UserEntity.Command.VerifyEmail
{
    public class VerifyEmailCommand : IRequest<VerfiyEmailResult>
    {
        public string UserId { get; set; }
        public string Token { get; set; }
    }

    public class VerifyEmailHandler : IRequestHandler<VerifyEmailCommand, VerfiyEmailResult>
    {
        private readonly IAuthRepository _auth;

        public VerifyEmailHandler(IAuthRepository auth)
        {
            _auth = auth;
        }
        public async Task<VerfiyEmailResult> Handle(VerifyEmailCommand request, CancellationToken cancellationToken)
        {
            var result = await _auth.VerifyEmail(request.UserId, WebUtility.UrlDecode(request.Token));   
            return new VerfiyEmailResult() { Success = result };
        }
    }

    public class VerfiyEmailResult {
        public bool Success { get; set; }
    }
}