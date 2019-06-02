using System;

namespace Domain.Entities
{
    public class Vote
    {
        // From Likes
        // Id,ProblemBetaId,UserId
        public Guid Id { get; set; }
        
        // User
        public Guid? UserId { get; set; }
        public User User { get; set; }

        // Problem
        public Guid? ProblemId { get; set; }
        public Problem Problem { get; set; }
    }
}