using System.Threading.Tasks;
using Domain.Entities;
using Application.Entities.UserEntity.Command.SignUp;

namespace Application.Interfaces.IRepositories
{
    public interface IAuthRepository
    {
        // This interface should be modified
        // This interface is used because UserManager and SignInManage Implemented by Entityframework isnt 
        // certain to be used in the future, so it is abstracted 
        Task<SignUpResult> SignUp(User newUser, string Password);

        Task<User> SignIn(string userName, string Password);
    }
}