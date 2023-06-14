using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using GeoCore.Models;

namespace GeoCore.Controllers;

public class VerlofsAanvraagController : Controller
{
    // GET
    
    [HttpGet]
    public IActionResult Get()
    {
        var verlofList = _dbContext.Verloven.ToList();
        return Ok(verlofList);
    }
    
    [HttpPost]
    public IActionResult Create(Verlof verlof)
    {
        if (ModelState.IsValid)
        {
            _dbContext.Verloven.Add(verlof);
            _dbContext.SaveChanges();
            return Ok(verlof.Id);
        }
        return BadRequest(ModelState);
    }


    [HttpPut("{id}")]
    public IActionResult Update(int id, Verlof updatedVerlof)
    {
        var verlof = _dbContext.Verloven.Find(id);
        if (verlof == null)
        {
            return NotFound();
        }

        // Werk de eigenschappen van de verlofaanvraag bij
        verlof.VerlofTypeID = updatedVerlof.VerlofTypeID;
        verlof.StartDate = updatedVerlof.StartDate;
        verlof.EndDate = updatedVerlof.EndDate;
        verlof.Reden = updatedVerlof.Reden;
        // Werk andere eigenschappen bij indien nodig

        _dbContext.SaveChanges();
        return NoContent();
    }
    
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var verlof = _dbContext.Verloven.Find(id);
        if (verlof == null)
        {
            return NotFound();
        }

        _dbContext.Verloven.Remove(verlof);
        _dbContext.SaveChanges();
        return NoContent();
    }
    [HttpPost("verlofaanvragen")]
    public IActionResult CreateVerlof([FromBody] Verlof verlof)
    {
        // Perform validation or any additional logic here
        if (ModelState.IsValid)
        {
            // Save the verlof to the database or perform any other required operations
            _dbContext.Verloven.Add(verlof);
            _dbContext.SaveChanges();
        
            // Return the newly created verlof with the assigned ID
            return Ok(verlof);
        }

        // Return a bad request if the verlof data is invalid
        return BadRequest(ModelState);
    }



    
    
}