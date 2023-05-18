using Geoprofs.Models;
using Microsoft.EntityFrameworkCore;

namespace GeoCore.Models;

public class GeoContext : DbContext
{
    public GeoContext(DbContextOptions<GeoContext> options) : base(options)
    {

    }
    public DbSet<User> Users { get; set; }
    public DbSet<Verlof> Verloven { get; set; }
}