﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PetStore.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Pet> Pets { get; set; }
    }

    public class OwnerListDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int PetCount { get; set; }
    }
}