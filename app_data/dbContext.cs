using System.Data.Entity;
using System.Web.UI;
using Geoprofs.Models;

namespace Geoprofs.App_Data
{
    public class GeoContext : DbContext
    {
        public GeoContext() : base("DefaultConnection")
        {
        }
        
        public DbSet<User> Users { get; set; }
        public DbSet<Verlof> Verloven { get; set; } 
    }
}