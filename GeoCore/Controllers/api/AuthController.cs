using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using GeoCore.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace GeoCore.Controllers.api;


[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _config;

    private readonly GeoContext _context;

    public AuthController(GeoContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }

    [AllowAnonymous]
    [HttpPost]
    public async Task<IActionResult> AuthHandler([FromBody] UserCredits userCredits)
    {
        var user = Authenticate(userCredits);
        
        if (user != null)
        {
            var token = CreateJwtToken(user);
            
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
    
    [HttpGet]
    
    

    private string CreateJwtToken(User user)
    {
        var claims = new List<Claim>
        {
            new(ClaimTypes.NameIdentifier, user.Name),
            new(ClaimTypes.Role, user.Role.ToString())
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var expires = DateTime.Now.AddMinutes(Convert.ToDouble(_config["jwt:DurationInMinutes"]));


        var token = new JwtSecurityToken(
            _config["jwt:issuer"],
            _config["jwt:Audience"],
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
            if (user.Password == userCredits.Password)
                return user;
        return null;
    }
}