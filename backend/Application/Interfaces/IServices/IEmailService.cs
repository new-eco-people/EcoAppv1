using System.Threading.Tasks;
using Application.Entities.UserEntity.Command.SignUp;

namespace Application.Interfaces.IServices
{
    public interface IEmailService
    {
        Task SendAsync(UserCreated UserCreatedDetails);
    }
}