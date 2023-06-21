using GeoCore.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace GeoCore.Controllers;

public class ApiController : Controller
{
    private readonly ILogger<ApiController> _logger;
    private readonly GeoContext _context;
    
    public ApiController(ILogger<ApiController> logger, GeoContext context)
    {
        _logger = logger;
        _context = context;
    }

    
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
}