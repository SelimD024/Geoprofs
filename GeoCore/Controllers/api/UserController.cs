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
                // Validate the incoming model if needed
                if (ModelState.IsValid)
                {
                    // Create a new User entity
                    var newUser = new User
                    {
                        Name = model.Name,
                        Role = model.Role,
                        Email = model.Email
                        // Add any other properties as needed
                    };

                    // Add the new user to the context
                    _context.Users.Add(newUser);

                    // Save changes to the database
                    await _context.SaveChangesAsync();

                    // Return the newly created user
                    return CreatedAtAction(nameof(GetUsers), new { id = newUser.UserId }, newUser);
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                // Handle exceptions or validation errors
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound(); // User not found
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync(); // Save changes to the database

            return NoContent(); // Successful deletion
        }
    }
}
