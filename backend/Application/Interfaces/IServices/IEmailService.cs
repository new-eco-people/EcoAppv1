using System.Threading.Tasks;
using Application.Entities.UserEntity.Command.SignUp;
using Domain.Entities;

namespace Application.Interfaces.IServices
{
    public interface IEmailService
    {
        Task SendAsync(UserCreated UserCreatedDetails);
        Task SendVerifyEmailAsync(EmailData VerifyEmailData);
        Task SendForgotPasswordEmailAsync(EmailData VerifyEmailData);
        Task SendChangePasswordNotificationAsync(EmailData VerifyEmailData);

    }

    public class EmailData {
        public User User { get; set; }
        public string Token { get; set; }
        public string Errors { get; set; }
    }
}