using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces.IServices;
using MediatR;

namespace Application.Entities.UserEntity.Command.ResetPassword
{
    public class PasswordResetMade : INotification
    {
        public EmailData EmailData { get; set; }
    }

    public class PasswordResetMadeHandler : INotificationHandler<PasswordResetMade>
    {
        private readonly IEmailService _emailService;

        public PasswordResetMadeHandler(IEmailService emailService)
        {
            _emailService = emailService;
        }
        public async Task Handle(PasswordResetMade notification, CancellationToken cancellationToken)
        {
            await _emailService.SendChangePasswordNotificationAsync(notification.EmailData);
        }
    }
}