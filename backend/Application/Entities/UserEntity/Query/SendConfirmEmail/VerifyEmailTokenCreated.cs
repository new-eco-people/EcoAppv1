using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces.IServices;
using MediatR;

namespace Application.Entities.UserEntity.Query.SendConfirmEmail
{
    public class VerifyEmailTokenCreated : INotification
    {
        public EmailData VerifyEmailData { get; set; }
    }

    public class VerifyEmailTokenCreatedHandler : INotificationHandler<VerifyEmailTokenCreated>
    {
        private readonly IEmailService _emailService;

        public VerifyEmailTokenCreatedHandler(IEmailService emailService)
        {
            _emailService = emailService;
        }
        public async Task Handle(VerifyEmailTokenCreated notification, CancellationToken cancellationToken)
        {
            await _emailService.SendVerifyEmailAsync(notification.VerifyEmailData);
        }
    }
}