using GeoCore.Migrations;
using GeoCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GeoCore.Controllers.api;

[Route("api/[controller]")]
[ApiController]


public class VerlofController : ControllerBase
{
    private readonly ILogger<VerlofController> _logger;
    private readonly GeoContext _context;
    
    public VerlofController(ILogger<VerlofController> logger, GeoContext context)
    {
        _logger = logger;
        _context = context;
    }


    /// <summary>
    /// Post method 
    /// </summary>
    /// <param name="verlof"></param>
    /// <returns></returns>
    
    [HttpPost]
    public async Task<IActionResult> Verlof([FromBody] Verlof verlof)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Verloven.Add(verlof);
        await _context.SaveChangesAsync();

        return Ok(verlof);
    }

    [HttpGet]
    public async Task <ActionResult<IEnumerable<Verlof>>> GetAllVerlof()
    {
        return await _context.Verloven.ToListAsync();
    }

}