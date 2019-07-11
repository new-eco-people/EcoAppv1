using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces.IRepositories;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Application.Entities.UserEntity.Command.SignUp;
using Application.Interfaces.IServices;
using Application.Entities.UserEntity.Query.SendConfirmEmail;
using Application.Exceptions;

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

        public async Task<VerifyEmailData> SignUp(User user, string Password) {
            var result = await _userManager.CreateAsync(user, Password);

            if (!result.Succeeded)
                return new VerifyEmailData() {
                Errors = string.Join(',', result.Errors.Select(x=>x.Description)),
                User = null
            };
            
            var EmailToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            
            return new VerifyEmailData() { Errors = null, User = user, Token = EmailToken };

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

            if (await _userManager.IsEmailConfirmedAsync(user))
                throw new CustomMessageException($"{user.Email} has already been confirm");

            var result = await _userManager.ConfirmEmailAsync(user,token);

            return result.Succeeded;
        }

        public async Task<VerifyEmailData> SendVerificationEmail(string email) 
        {
            var user = await _userManager.Users.Include(u => u.UserDetail).SingleOrDefaultAsync(u => u.NormalizedEmail == email.ToUpper());

            if (user == null)
                return new VerifyEmailData(){ Errors = $"{email} has not been signed up to the ECO platform" };

            if (await _userManager.IsEmailConfirmedAsync(user))
                return new VerifyEmailData(){ Errors = $"{email} has already been confirm" };

            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            return new VerifyEmailData() {
                User = user,
                Token = token
            };
        }

        public async Task<bool> UsernameOrEmailAvailable(string usernameOrEmail)
        {
            if (string.IsNullOrEmpty(usernameOrEmail))
                throw new CustomMessageException("An error occurred, please try again later");

            var user = await _userManager.Users.SingleOrDefaultAsync(
                            u => u.NormalizedEmail == usernameOrEmail.ToUpper() || u.NormalizedUserName == usernameOrEmail.ToUpper());

            return user == null;
        }
    }
} 