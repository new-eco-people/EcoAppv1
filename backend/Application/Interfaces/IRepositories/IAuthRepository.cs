using System.Threading.Tasks;
using Domain.Entities;
using Application.Entities.UserEntity.Command.SignUp;
using Application.Entities.UserEntity.Query.SendConfirmEmail;
using Application.Interfaces.IServices;

namespace Application.Interfaces.IRepositories
{
    public interface IAuthRepository
    {
        // This interface should be modified
        // This interface is used because UserManager and SignInManage Implemented by Entityframework isnt 
        // certain to be used in the future, so it is abstracted 
        Task<EmailData> SignUp(User newUser, string Password);

        Task<User> SignIn(string userName, string Password);

        Task<bool> VerifyEmail(string id, string token);

        Task<EmailData> SendVerificationEmail(string email); 

        Task<bool> EmailAvailable(string usernameOrEmail);

        Task<EmailData> SendForgotPasswordEmail(string email);

        Task<EmailData> VarifyAndChangeUserPassword(string token, string userId, string password);
        // Task<EmailData> ChangeUserPassword(string userId, string password);
    }
}