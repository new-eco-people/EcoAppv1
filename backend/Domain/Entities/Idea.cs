using System;

namespace Domain.Entities
{
    public class Idea
    {
        // Id|Message|DateCreated|DateModified|UserId|ProblemBetaId
        public Guid Id { get; set; }
        public String Message { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }

        // User
        public User User { get; set; }
        public Guid? UserId { get; set; }

        // Problem
        public Problem Problem { get; set; }
        public Guid? ProblemId { get; set; }

    }
}