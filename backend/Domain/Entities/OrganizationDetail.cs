using System;

namespace Domain.Entities
{
    public class OrganizationDetail
    {
        public Guid Id { get; set; }
        public String Name { get; set; }
        public bool HeadQuaters { get; set; }

        public User User { get; set; }
        public Guid UserId { get; set; }
    }
}