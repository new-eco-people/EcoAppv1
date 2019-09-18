using System;
using System.Collections.Generic;
using Domain.Entities.CoreEntities;

namespace Domain.Entities
{
    public class Problem
    {
        // From ProblemBeta
        // Id,Description,Eco,EcoUn,EcoUnOther,Ico,IcoOther,CountryId,StateId,Deleted,UserId,DateCreated,DateModified
        public Guid Id { get; set; }
        public string Description { get; set; }

        // Eco Entity 
        public EcoEntity EcoEntity { get; set; }
        public int? EcoEntityId { get; set; }

        // UN SDG Goals
        public UnSDGGoal UnSDGGoal { get; set; }
        public int? UnSDGGoalId { get; set; }
        public string UnSDGGoalsOther { get; set; }

        // ICO
        public Ico Ico { get; set; }
        public int? IcoId { get; set; }
        public string IcoOther { get; set; }

        // DateTime
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }


        // Country
        public Country Country { get; set; }
        public int? CountryId { get; set; }

        // State
        public State State { get; set; }
        public int? StateId { get; set; }

        // User
        public Guid? UserId { get; set; }
        public User User { get; set; }

        public ICollection<Project> Projects { get; set; }
        public ICollection<Photo> Photos { get; set; }
        public ICollection<Vote> Votes { get; set; }        
        public ICollection<Idea> Ideas { get; set; }

        public Problem()
        {
            Projects = new HashSet<Project>();
            Photos = new HashSet<Photo>();
            Votes = new HashSet<Vote>();
            Ideas = new HashSet<Idea>();
            User = null;
        }
    }
}