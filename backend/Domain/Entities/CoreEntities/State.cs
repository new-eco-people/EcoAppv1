using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities.CoreEntities
{
    public class State
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [StringLength(60)]
        public string Name { get; set; }
        public Country Country { get; set; }
        public int CountryId { get; set; }
    }
}