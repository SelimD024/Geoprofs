using System.Net;
using System.Net.Security;
using System.Text.Json;
using GeoCore.Models;
using GeoCore.Seeders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;


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
    public async Task<IActionResult>  AuthHandler([FromBody] UserCredits userCredits)
    {
        var user = Authenticate(userCredits);
        var token = CreateJwtToken(user);
        
        if (user != null)
        {
            HttpContext.Response.Headers.Add("Authorization", token);
            return new ContentResult
            {
                Content = token,
                StatusCode = 200
            };
        }
        return new ContentResult
        {
            Content = "Het werkt niet",
            StatusCode = 400
        };
    }

    private string CreateJwtToken(User user )
    {
        
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.NameIdentifier, user.Name),
            new Claim(ClaimTypes.Role, user.Role.ToString())
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var expires = DateTime.Now.AddMinutes(Convert.ToDouble(_config["jwt:DurationInMinutes"]));

        var token = new JwtSecurityToken(
            _config["jwt:issuer"],
            _config["jwt:aud"],
            claims,
            expires: expires,
            signingCredentials: creds
        );
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
    
    // Als er een match is met username en password values van usercredits met de User data, return true
    private User Authenticate(UserCredits userCredits)
    {
        var user = _context.Users.FirstOrDefault(u => u.Name.ToLower() == userCredits.Name.ToLower());

        if (user != null)
        {
            if (user.Password == userCredits.Password)
            {
                return user;
            }
        }
        return null;
    }
}

   