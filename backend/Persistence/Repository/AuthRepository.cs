using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces.IRepositories;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Application.Entities.UserEntity.Command.SignUp;

namespace Persistence.Repository
{
    public class AuthRepository : IAuthRepository
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AuthRepository(UserManager<User> userManager, SignInManager<User> signInManager)
        {
             _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<SignUpResult> SignUp(User user, string Password) {
            var result = await _userManager.CreateAsync(user, Password);

            if (result.Succeeded)
                return new SignUpResult() { Errors = null, User = user };

            return new SignUpResult() {
                Errors = string.Join(',', result.Errors.Select(x=>x.Description)),
                User = null
            };
        }

        public async Task<User> SignIn(string userNameOrEmail, string Password) {
            var user = await _userManager.Users
                .FirstOrDefaultAsync(u => 
                    u.Email.ToUpper() == userNameOrEmail.ToUpper() ||
                    u.UserName.ToUpper() == userNameOrEmail.ToUpper()
                    );

            if (user == null)
                return null;

            var login = await _userManager.CheckPasswordAsync(user, Password);

            if (!login)
                return null;

            return user;
            // var user = _signInManager.()
        }
    }
}