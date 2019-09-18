using System;
using System.Linq.Expressions;
using Domain.Entities;

namespace Application.Entities.UserEntity.Query.SignIn
{
    public class SignInModel
    {
        public string Token { get; set; }

        public static Expression<Func<User, SignInModel>> Projection
        {
            get
            {
                return User => new SignInModel
                {
                    Token = null
                };
            }
        }

        public static SignInModel Create(User user)
        {
            return Projection.Compile().Invoke(user);
        }
    }
}