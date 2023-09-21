using GeoCore.Models;
using Microsoft.EntityFrameworkCore;

namespace GeoCore.Seeders;

public static class UserSeeder
{
    public static void Seed(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasData(
            new User { UserId = 1, Name = "Selim", Password = "selim12", Email = "Selim@live.nl", Role = 1 },
            new User { UserId = 2, Name = "Cem", Password = "Cem12", Email = "Cem@live.nl", Role = 1 }
        );
    }
    
    // public static List<User> Users()
    // {
    //
    //     
    //     
    // }
    
}

