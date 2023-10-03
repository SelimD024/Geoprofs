using GeoCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GeoCore.Controllers.api
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly GeoContext _context;
        private readonly IConfiguration _config;

        public UserController(GeoContext context, IConfiguration config)
        {
            _context = context;
            _config = config;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            var users = _context.Users.ToList();
            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] User model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newUser = new User
                    {
                        Name = model.Name,
                        Role = model.Role,
                        Email = model.Email
                    };

                    _context.Users.Add(newUser);

                    await _context.SaveChangesAsync();

                    return CreatedAtAction(nameof(GetUsers), new { id = newUser.UserId }, newUser);
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound(); 
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync(); 

            return NoContent(); 
        }
    }
}
