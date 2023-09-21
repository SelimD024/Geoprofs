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

        // And other actions for adding, updating, or deleting users...
    }

