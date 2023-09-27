using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using GeoCore.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;

namespace GeoCore.Controllers.authorization;
[Route("authorization/[controller]")]
[ApiController]
[Authorize(Roles = "1")]
public class DashboardController : ControllerBase
{
    public IActionResult Dashboard()
    {
        return new ContentResult()
        {
            Content = "Je hebt toegang",
            StatusCode = 200
        };
    }
}