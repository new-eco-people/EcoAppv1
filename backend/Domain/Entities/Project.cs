using System;

namespace Domain.Entities
{
    public class Project
    {
        // Id,WebLink,Title,Description,Deleted,DateCreated,DateModified,UserId,ProblemBetaId
        public Guid Id { get; set; }
        public String Title { get; set; }
        public String Url { get; set; }
        public String Description { get; set; }
        public bool Deleted { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        
        // User
        public Guid? UserId { get; set; }
        public User User { get; set; }

        // Problem
        public Guid? ProblemId { get; set; }
        public Problem Problem { get; set; }
    }
}