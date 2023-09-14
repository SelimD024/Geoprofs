using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace  GeoCore.Models
{
    public class User
    {
        [Key]
        public int? UserId { get; set; }
        public int? Role { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
    }
}

