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
    public class OwnersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Owners
        public async Task<PagedDTO<OwnerListDTO>> GetOwners(int page = 1)
        {
            //return db.Owners.OrderBy(o => o.Name);

            var query = db.Owners
                .Select(o => new OwnerListDTO
                {
                    Id = o.Id,
                    Name = o.Name,
                    PetCount = o.Pets.Count()
                })
                .OrderBy(o => o.Name);

            return new PagedDTO<OwnerListDTO>
            {
                TotalCount = await query.CountAsync(),
                Data = await query.Skip((page - 1) * 3).Take(3).ToListAsync()
            };
        }

        // GET: api/Owners/5
        [ResponseType(typeof(OwnerDTO))]
        public async Task<IHttpActionResult> GetOwner(int id)
        {
            OwnerDTO owner = await db.Owners
                .Where(o => o.Id == id)
                .Select(o => new OwnerDTO
                {
                    Name = o.Name
                })
                .FirstAsync();
            if (owner == null)
            {
                return NotFound();
            }

            return Ok(owner);
        }

        // PUT: api/Owners/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutOwner(int id, Owner owner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != owner.Id)
            {
                return BadRequest();
            }

            db.Entry(owner).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OwnerExists(id))
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

        // POST: api/Owners
        [ResponseType(typeof(Owner))]
        public async Task<IHttpActionResult> PostOwner(Owner owner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Owners.Add(owner);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = owner.Id }, owner);
        }

        // DELETE: api/Owners/5
        [ResponseType(typeof(Owner))]
        public async Task<IHttpActionResult> DeleteOwner(int id)
        {
            Owner owner = await db.Owners.FindAsync(id);
            if (owner == null)
            {
                return NotFound();
            }

            db.Owners.Remove(owner);
            await db.SaveChangesAsync();

            return Ok(owner);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool OwnerExists(int id)
        {
            return db.Owners.Count(e => e.Id == id) > 0;
        }
    }
}