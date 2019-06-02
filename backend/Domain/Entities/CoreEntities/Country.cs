using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities.CoreEntities
{
    public class Country
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [StringLength(5)]
        public string SortName { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(5)]
        public string PhoneCode { get; set; }
        public ICollection<State> States { get; set; }
        public Country()
        {
            States = new List<State>();
        }
    }
}