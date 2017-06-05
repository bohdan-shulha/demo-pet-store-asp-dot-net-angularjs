using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PetStore.Models
{
    public class Pet
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [Required]
        public Owner Owner { get; set; }
    }
}