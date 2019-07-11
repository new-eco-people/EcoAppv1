using System.Threading;
using System.Threading.Tasks;
using Application.Exceptions;
using Application.Infrastructure.Token;
using Application.Interfaces.IRepositories;
using Domain.Entities;
using MediatR;

namespace Application.Entities.UserEntity.Query.SignIn
{
    public class SignInCommand : IRequest<SignInModel>
    {
        public string UserNameEmail { get; set; }
        public string Password { get; set; }
        public bool? RememberMe { get; set; }
    }

    public class SignInCommandHandler : IRequestHandler<SignInCommand, SignInModel>
    {
        private readonly IAuthRepository _auth;

        public SignInCommandHandler(IAuthRepository auth)
        {
            _auth = auth;
        }
        public async Task<SignInModel> Handle(SignInCommand request, CancellationToken cancellationToken)
        {
            var user  = await _auth.SignIn(request.UserNameEmail, request.Password);

            if (user == null)
                throw new NotFoundException(nameof(User), request.UserNameEmail);

            var response = SignInModel.Create(user);
            response.Token = TokenFunctions.generateUserToken(user, request.RememberMe.HasValue);

            return response;
        }
    }
}