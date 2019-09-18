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

        public async Task<EmailData> SignUp(User user, string Password) {
            var result = await _userManager.CreateAsync(user, Password);

            if (!result.Succeeded)
                return new EmailData() {
                Errors = string.Join(',', result.Errors.Select(x=>x.Description)),
                User = null
            };
            
            var EmailToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);
            
            return new EmailData() { Errors = null, User = user, Token = EmailToken };

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

            // if (!user.EmailConfirmed)
            //     throw new ConfirmEmailException(user.Email);

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

        public async Task<EmailData> SendVerificationEmail(string email) 
        {
            var user = await _userManager.Users.Include(u => u.UserDetail).SingleOrDefaultAsync(u => u.NormalizedEmail == email.ToUpper());

            if (user == null)
                return new EmailData(){ Errors = $"{email} has not been signed up to the ECO platform" };

            if (await _userManager.IsEmailConfirmedAsync(user))
                return new EmailData(){ Errors = $"{email} has already been confirm" };

            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            return new EmailData() {
                User = user,
                Token = token
            };
        }

        public async Task<bool> EmailAvailable(string usernameOrEmail)
        {
            if (string.IsNullOrEmpty(usernameOrEmail))
                throw new CustomMessageException("An error occurred, please try again later");

            var user = await _userManager.Users.SingleOrDefaultAsync(
                            u => u.NormalizedEmail == usernameOrEmail.ToUpper() || u.NormalizedUserName == usernameOrEmail.ToUpper());

            return user == null;
        }

        public async Task<EmailData> SendForgotPasswordEmail(string email)
        {
            var user = await _userManager.Users.Include(u => u.UserDetail).SingleOrDefaultAsync(u => u.NormalizedEmail == email.ToUpper());

            if (user == null)
                return new EmailData(){ Errors = $"{email} has not been signed up to the ECO platform" };

             var token = await _userManager.GeneratePasswordResetTokenAsync(user);

             
            return new EmailData() {
                User = user,
                Token = token
            };
        }

        public async Task<EmailData> VarifyAndChangeUserPassword(string token, string userId, string password)
        {
            var user = await _userManager.Users.Include(u => u.UserDetail).FirstOrDefaultAsync(u => u.Id.ToString() == userId);

            if (user == null)
                throw new CustomMessageException("An error occurred, please try again later");
            
            var result = _userManager.ResetPasswordAsync(user,token, password).Result;

            if (!result.Succeeded)
                return new EmailData() {
                Errors = string.Join(',', result.Errors.Select(x=>x.Description)),
                User = null
            };

            return new EmailData() { User = user };
        }

        // public Task<EmailData> ChangeUserPassword(string userId, string password)
        // {
        //     throw new System.NotImplementedException();
        // }
    }
} 