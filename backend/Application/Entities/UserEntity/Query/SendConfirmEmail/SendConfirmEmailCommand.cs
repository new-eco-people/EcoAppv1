using System.Threading;
using System.Threading.Tasks;
using Application.Entities.UserEntity.Command.SignUp;
using Application.Exceptions;
using Application.Interfaces.IRepositories;
using MediatR;

namespace Application.Entities.UserEntity.Query.SendConfirmEmail
{
    public class SendConfirmEmailCommand : IRequest<Unit>
    {
        public string EmailAddress { get; set; }
    }

    public class SendConfirmEmailHandler : IRequestHandler<SendConfirmEmailCommand, Unit>
    {
        private readonly IAuthRepository _auth;
        private readonly IMediator _mediator;

        public SendConfirmEmailHandler(IAuthRepository auth, IMediator mediator)
        {
            _auth = auth;
            _mediator = mediator;
        }
        public async Task<Unit> Handle(SendConfirmEmailCommand request, CancellationToken cancellationToken)
        {
            var result = await _auth.SendVerificationEmail(request.EmailAddress);

            if (!string.IsNullOrEmpty(result.Errors))
                throw new CustomMessageException(result.Errors);

            await _mediator.Publish(new VerifyEmailTokenCreated() { VerifyEmailData = result });
            return Unit.Value;
        }
    }

}