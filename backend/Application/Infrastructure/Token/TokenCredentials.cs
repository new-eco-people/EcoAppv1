using System;
using System.Security.Claims;

namespace Application.Infrastructure.Token
{
    public class TokenCredentials
    {
        public TokenCredentials(ClaimsPrincipal user)
        {
            setTokens(user);
        }

        public string UserId { get; set; }
        private void setTokens(ClaimsPrincipal User) {
            SetUserId(User);
        }

        private void SetUserId(ClaimsPrincipal User)
        {
            UserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
        }
    }
    
}