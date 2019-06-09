using System.Threading;
using System.Threading.Tasks;
using Application.Exceptions;
using Application.Interfaces.IRepositories;
using MediatR;

namespace Application.Entities.UserEntity.Query.SendConfirmEmail
{
    public class SendConfirmEmailCommand : IRequest<Unit>
    {
        public string Email { get; set; }
    }

    public class SendConfirmEmailHandler : IRequestHandler<SendConfirmEmailCommand, Unit>
    {
        private readonly IAuthRepository _auth;

        public SendConfirmEmailHandler(IAuthRepository auth)
        {
            _auth = auth;
        }
        public async Task<Unit> Handle(SendConfirmEmailCommand request, CancellationToken cancellationToken)
        {
            var result = await _auth.SendVerificationEmail(request.Email);

            if (string.IsNullOrEmpty(result.Error))
                return Unit.Value;
            
            throw new CustomMessageException(result.Error);
        }
    }

    public class SendConfirmEmailResult 
    {
        public string Error { get; set; }

    }
}