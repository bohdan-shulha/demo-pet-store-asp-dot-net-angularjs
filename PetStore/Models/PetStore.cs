using System.Collections.Generic;

namespace PetStore.Models
{
    public class PagedDTO<T>
    {
        public int TotalCount { get; set; }
        public IEnumerable<T> Data { get; set; }
    }
}