using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces.IServices;
using Domain.Entities;
using MediatR;

namespace Application.Entities.UserEntity.Command.SignUp
{
    public class UserCreated : INotification
    {
        public EmailData VerifyEmailData { get; set; }
    }

    public class UserCreatedHandler : INotificationHandler<UserCreated>
    {
        private readonly IEmailService _emailService;

        public UserCreatedHandler(IEmailService emailService)
        {
            _emailService = emailService;
        }
        public async Task Handle(UserCreated notification, CancellationToken cancellationToken)
        {
            await _emailService.SendVerifyEmailAsync(notification.VerifyEmailData);
        }
    }
}