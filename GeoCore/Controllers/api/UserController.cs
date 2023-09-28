using GeoCore.Models;
using Microsoft.AspNetCore.Mvc;



namespace GeoCore.Controllers.api;


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
        
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            Console.WriteLine($"Verwijderen van gebruiker met ID {id}");
    
            var user = _context.Users.FirstOrDefault(u => u.UserId == id);

            if (user == null)
            {
                Console.WriteLine($"Gebruiker met ID {id} niet gevonden");
                return NotFound(); // Gebruiker niet gevonden
            }

            _context.Users.Remove(user);
            _context.SaveChanges(); // Bewaar de wijzigingen in de database

            Console.WriteLine($"Gebruiker met ID {id} is verwijderd.");
            return NoContent(); // Succesvolle verwijdering
        }



    }

