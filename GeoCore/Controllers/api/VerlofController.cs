using System.Text.Json;
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
    /// POST HANDLER zorgt ervoor dat er post requests gemaakt kunnen worden
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

    /// <summary>
    /// GET handler om alle verlof data te fetchen.
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task <ActionResult<IEnumerable<Verlof>>> GetAllVerlof()
    {
        return await _context.Verloven.ToListAsync();
    }
    
    /// <summary>
    /// PUT om status te veranderen
    /// </summary>
    /// <param name="id"></param>
    /// <param name="status"></param>
    /// <returns>Returned niks (update de verlof)</returns>
    /// 
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateStatus(int id, [FromBody] VerlofStatusRequest statusRequest)
    {
        _logger.LogInformation($"Updating status for verlof ID {id} to {statusRequest.Status}");

        var verlof = await _context.Verloven.FindAsync(id);
        if (verlof == null)
        {
            _logger.LogWarning($"No verlof found with ID {id}");
            return NotFound();
        }

        verlof.Status = statusRequest.Status;
        await _context.SaveChangesAsync();

        _logger.LogInformation($" updated status for verlof ID {id}");

        return NoContent();
    }
}