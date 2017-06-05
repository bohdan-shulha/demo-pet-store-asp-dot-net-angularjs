using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PetStore.Models
{
    public partial class Pet
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public int OwnerID { get; set; }

        public virtual Owner Owner { get; set; }
    }

    public class NewPetDTO
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public int OwnerID { get; set; }
    }

    public class PetListDTO
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }
}