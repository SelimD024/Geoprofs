using System.Net;
using System.Net.Security;
using System.Text.Json;
using GeoCore.Models;
using GeoCore.Seeders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace GeoCore.Controllers.api;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{

    
    private readonly GeoContext _context;
    private readonly IConfiguration _config;

    public AuthController(GeoContext context, IConfiguration config)
    {
        
        _context = context;
        _config = config;
    }

    [AllowAnonymous]
    [HttpPost]
    public Task<IActionResult>  AuthCredits([FromBody] UserCredits userCredits)
    {
        
    }

    private string Generate(User user)
    {
        throw new NotImplementedException();
    }

    private User Authenticate(UserCredits userCredits)
    {
        var CurrentUser = UserSeeder.
    }
}

   