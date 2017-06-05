using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using PetStore.Models;

namespace PetStore.Controllers
{
    public class PetsController : ApiController
    {
        // NOTE: maybe we can use OWIN context to get the DbContext
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Pets
        public IQueryable<PetListDTO> GetPets(int ownerId)
        {
            return db.Pets
                .Where(p => p.Owner.Id == ownerId)
                .OrderBy(p => p.Name)
                .Select(p => new PetListDTO
                {
                    ID = p.Id,
                    Name = p.Name
                });
        }

        // GET: api/Pets/5
        [ResponseType(typeof(Pet))]
        public async Task<IHttpActionResult> GetPet(int id)
        {
            Pet pet = await db.Pets.FindAsync(id);
            if (pet == null)
            {
                return NotFound();
            }

            return Ok(pet);
        }

        // PUT: api/Pets/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPet(int id, Pet pet)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pet.Id)
            {
                return BadRequest();
            }

            db.Entry(pet).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Pets
        [ResponseType(typeof(NewPetDTO))]
        public async Task<IHttpActionResult> PostPet(NewPetDTO petDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // NOTE: we might hide implementation details in the repository
            var pet = new Pet
            {
                Name = petDTO.Name,
                OwnerID = petDTO.OwnerID
            };

            db.Pets.Add(pet);

            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = pet.Id }, petDTO);
        }

        // DELETE: api/Pets/5
        [ResponseType(typeof(Pet))]
        public async Task<IHttpActionResult> DeletePet(int id)
        {
            Pet pet = await db.Pets.FindAsync(id);
            if (pet == null)
            {
                return NotFound();
            }

            db.Pets.Remove(pet);
            await db.SaveChangesAsync();

            return Ok(pet);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PetExists(int id)
        {
            return db.Pets.Count(e => e.Id == id) > 0;
        }
    }
}