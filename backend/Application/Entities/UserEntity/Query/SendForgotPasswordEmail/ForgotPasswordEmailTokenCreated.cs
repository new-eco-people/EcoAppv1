using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces.IServices;
using MediatR;

namespace Application.Entities.UserEntity.Query.SendForgotPasswordEmail
{
    public class ForgotPasswordEmailTokenCreated : INotification
    {
        public EmailData VerifyEmailData { get; set; }
    }

    public class ForgotPasswordEmailTokenCreatedHandler : INotificationHandler<ForgotPasswordEmailTokenCreated>
    {
        private readonly IEmailService _emailService;
        public ForgotPasswordEmailTokenCreatedHandler(IEmailService emailService)
        {
            _emailService = emailService;
        }
        public async Task Handle(ForgotPasswordEmailTokenCreated notification, CancellationToken cancellationToken)
        {
            await _emailService.SendForgotPasswordEmailAsync(notification.VerifyEmailData);
        }
    }
}