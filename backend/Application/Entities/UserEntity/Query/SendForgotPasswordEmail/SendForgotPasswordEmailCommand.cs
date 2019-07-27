using System.Threading;
using System.Threading.Tasks;
using Application.Exceptions;
using Application.Infrastructure.Validations;
using Application.Interfaces.IRepositories;
using MediatR;

namespace Application.Entities.UserEntity.Query.SendForgotPasswordEmail
{
    public class SendForgotPasswordEmailCommand : CaptchaCredentials, IRequest<Unit>
    {
        public string EmailAddress { get; set; }
    }

    public class SendForgotPasswordEmailHandler : IRequestHandler<SendForgotPasswordEmailCommand, Unit>
    {
        private readonly IAuthRepository _auth;
        private readonly IMediator _mediator;
        public SendForgotPasswordEmailHandler(IAuthRepository auth, IMediator mediator)
        {
            _auth = auth;
            _mediator = mediator;
        }
        public async Task<Unit> Handle(SendForgotPasswordEmailCommand request, CancellationToken cancellationToken)
        {
            var result = await _auth.SendForgotPasswordEmail(request.EmailAddress);

            if (!string.IsNullOrEmpty(result.Errors))
                throw new CustomMessageException(result.Errors);

            await _mediator.Publish(new ForgotPasswordEmailTokenCreated() { VerifyEmailData = result });
            return Unit.Value;
        }
    }
}