using System.Threading.Tasks;
using Application.Entities.UserEntity.Command.SignUp;
using Domain.Entities;

namespace Application.Interfaces.IServices
{
    public interface IEmailService
    {
        Task SendAsync(UserCreated UserCreatedDetails);
        Task SendVerifyEmailAsync(VerifyEmailData VerifyEmailData);
    }

    public class VerifyEmailData {
        public User User { get; set; }
        public string Token { get; set; }
        public string Errors { get; set; }
    }
}