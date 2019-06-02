using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    public class User : IdentityUser<Guid>
    {

        public UserDetail UserDetail { get; set; }
        public bool Deleted { get; set; }
        public bool AgreeToTermsAndCondition { get; set; }

        public ICollection<Problem> Problems { get; set; }
        public ICollection<Project> Projects { get; set; }
        public ICollection<Vote> Votes { get; set; }
        public ICollection<Idea> Ideas { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
        
        public User()
        {
            Problems = new HashSet<Problem>();
            Projects = new HashSet<Project>();
            Votes = new HashSet<Vote>();
            Ideas = new HashSet<Idea>();
            UserRoles = new HashSet<UserRole>();
        }
    }
}