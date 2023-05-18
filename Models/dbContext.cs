using System.Data.Entity;
using System.Web.UI;
using Geoprofs.Models;

namespace Geoprofs.Models 
{ 
    public class dbContext : DbContext
    {
        public dbContext() : base("GeoDatabase")
        {


        }


        public DbSet<User> Users { get; set; }
        public DbSet<Verlof> Verloven { get; set; }
    }
}