using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    public class User : IdentityUser<Guid>
    {
        public ICollection<UserRole> UserRoles { get; set; }

        public UserDetail UserDetail { get; set; }
        
        public User()
        {
            UserRoles = new HashSet<UserRole>();
        }
    }
}