using System;

namespace Domain.Entities
{
    public class Photo
    {
        // Id,Url,Description,DateAdded,ProblemBetaId,PublicId
        public Guid Id { get; set; }
        public string Url { get; set; }
        public String Description { get; set; }
        public DateTime DateCreated { get; set; }
        public string PublicId { get; set; }

        // Problem
        public Guid? ProblemId { get; set; }
        public Problem Problem { get; set; }

        public Photo()
        {
            DateCreated = DateTime.Now;
        }
    }
}