using Microsoft.AspNetCore.Mvc;
using GeoCore.Models;
using System;

namespace GeoCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VerlofController : ControllerBase
    {
        private readonly GeoContext _context;

        public VerlofController(GeoContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Get")]
        public IActionResult Get()
        {
            var verlofList = _context.Verloven.ToList();
            return Ok(verlofList);
        }

        [HttpPost("api/CreateVerlof")]
        public IActionResult CreateVerlof(Verlof verlofData)
        {

            try
            {

                return Ok("Success: Verlof created successfully!");
            }
            catch (Exception ex)
            {

                return StatusCode(500, "Error: Failed to create Verlof.");
            }
        }


        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Verlof updatedVerlof)
        {
            var verlof = _context.Verloven.Find(id);
            if (verlof == null)
            {
                return NotFound();
            }

            verlof.VerlofTypeID = updatedVerlof.VerlofTypeID;
            verlof.StartDate = updatedVerlof.StartDate;
            verlof.EndDate = updatedVerlof.EndDate;
            verlof.Reden = updatedVerlof.Reden;

            _context.SaveChanges();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var verlof = _context.Verloven.Find(id);
            if (verlof == null)
            {
                return NotFound();
            }

            _context.Verloven.Remove(verlof);
            _context.SaveChanges();
            return NoContent();
        }
    }
}