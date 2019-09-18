using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    public class Role : IdentityRole<Guid>
    {
        public ICollection<UserRole> UserRoles { get; private set; }

        public Role()
        {
            UserRoles = new HashSet<UserRole>();
        }
    }
}