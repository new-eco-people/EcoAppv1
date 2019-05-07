using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces.IRepositories;
using Domain.Entities;
using MediatR;

namespace Application.Entities.UserEntity.Command.SignUp
{
    public class SignUpCommand : IRequest<SignUpDto>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
    }

    public class SignUpHandler : IRequestHandler<SignUpCommand, SignUpDto>
    {
        private readonly IAuthRepository _auth;

        public SignUpHandler(IAuthRepository auth)
        {
            _auth = auth;
        }
        public Task<SignUpDto> Handle(SignUpCommand request, CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }

    public class SignUpResult 
    {
        public string Errors { get; set; }
        public User User { get; set; }
    }
}