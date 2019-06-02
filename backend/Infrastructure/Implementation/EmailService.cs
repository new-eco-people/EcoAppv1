using System.IO;
using System.Threading.Tasks;
using Application.Entities.UserEntity.Command.SignUp;
using Application.Interfaces.IServices;

namespace Infrastructure.Implementation
{
    public class EmailService : IEmailService
    {

        public async Task SendAsync(UserCreated UserCreatedDetails)
        {
            await WriteToFile(UserCreatedDetails.User.Email);
        }

        public async Task WriteToFile(string data) {
            using (var writer = new StreamWriter(Path.GetFullPath("emailmessage.txt"), append: false))
            {
                await writer.WriteLineAsync(data);
            }
        }
    }
}