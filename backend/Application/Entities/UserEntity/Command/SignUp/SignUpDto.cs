using System;
using System.Linq.Expressions;
using Domain.Entities;

namespace Application.Entities.UserEntity.Command.SignUp
{
    public class SignUpDto
    {
        public Guid Id { get; set; }

        public static Expression<Func<User, SignUpDto>> Projection
        {
            get
            {
                return User => new SignUpDto
                {
                    Id = User.Id
                };
            }
        }

        public static SignUpDto Create(User user)
        {
            return Projection.Compile().Invoke(user);
        }
    }
}