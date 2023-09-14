using GeoCore.Models;
using Microsoft.EntityFrameworkCore;
using GeoCore.Seeders;
namespace GeoCore.Models;

public class GeoContext : DbContext
{
    
    /// <summary>
    /// Onze migration constructor, hier worden steeds onze Models toegevoegd aan de database bij elke migration.
    /// </summary>
    /// <param name="options"></param>
    
    public GeoContext(DbContextOptions<GeoContext> options) : base(options)
    {

    }
    public DbSet<User> Users { get; set; }
    public DbSet<Verlof> Verloven { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        UserSeeder.Seed(modelBuilder);
        
        base.OnModelCreating(modelBuilder);
    }
    
}