using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces.IRepositories;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Application.Entities.UserEntity.Command.SignUp;
using Application.Interfaces.IServices;
using Application.Entities.UserEntity.Query.SendConfirmEmail;

namespace Persistence.Repository
{
    public class AuthRepository : IAuthRepository
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IEmailService _emailService;

        public AuthRepository(UserManager<User> userManager, SignInManager<User> signInManager, IEmailService emailService)
        {
             _userManager = userManager;
            _signInManager = signInManager;
            _emailService = emailService;
        }

        public async Task<SignUpResult> SignUp(User user, string Password) {
            var result = await _userManager.CreateAsync(user, Password);

            if (!result.Succeeded)
                return new SignUpResult() {
                Errors = string.Join(',', result.Errors.Select(x=>x.Description)),
                User = null
            };
            
            var EmailToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            
            return new SignUpResult() { Errors = null, User = user, EmailVerificationToken = EmailToken };

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
        }

        public async Task<bool> VerifyEmail(string id, string token)
        {
            var user = await _userManager.Users.SingleOrDefaultAsync(u => u.Id.ToString() == id);

            if (user == null)
                return false;

            var result = await _userManager.ConfirmEmailAsync(user,token);

            return result.Succeeded;
        }

        public async Task<SendConfirmEmailResult> SendVerificationEmail(string email) 
        {
            var user = await _userManager.Users.Include(u => u.UserDetail).SingleOrDefaultAsync(u => u.NormalizedEmail == email.ToUpper());

            if (user == null)
                return new SendConfirmEmailResult(){ Error = $"{email} has not been signed up to the ECO platform" };

            if (await _userManager.IsEmailConfirmedAsync(user))
                return new SendConfirmEmailResult(){ Error = $"{email} has already been confirm" };

            var verifyEmailDataObj = new VerifyEmailData() {
                                            User = user,
                                            Token = await _userManager.GenerateEmailConfirmationTokenAsync(user)
                                        };

            await _emailService.SendVerifyEmailAsync(verifyEmailDataObj);

            return new SendConfirmEmailResult();
        }

        public async Task<bool> UsernameOrEmailAvailable(string usernameOrEmail)
        {
            var user = await _userManager.Users.SingleOrDefaultAsync(
                            u => u.NormalizedEmail == usernameOrEmail.ToUpper() || u.NormalizedUserName == usernameOrEmail.ToUpper());

            return user == null;
        }
    }
} 