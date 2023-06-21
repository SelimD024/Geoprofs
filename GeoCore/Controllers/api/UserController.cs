// using GeoCore.Models;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
//
// namespace GeoCore.Controllers.api;
//
// [ApiController]
// [Route("api/[controller]")]
// public class UserController : ControllerBase
// {
//     private readonly GeoContext _context;
//
//     public UserController(GeoContext context)
//     {
//         _context = context;
//     }
//
//     [HttpPost("login")]
//     public async Task<ActionResult<User>> Login(LoginDto loginDto)
//     {
//         var user = await _context.Users
//             .SingleOrDefaultAsync(u => u.Username == loginDto.Username);
//
//         if (user == null)
//         {
//             return Unauthorized("Invalid username");
//         }
//
//         if (user.Password != loginDto.Password) 
//         {
//             return Unauthorized("Invalid password");
//         }
//
//         return user;
//     }
// }