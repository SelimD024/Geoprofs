using System;
using System.Linq;
using GeoCore.Models;
using Microsoft.EntityFrameworkCore;

public interface ISeeder
{
    void Seed(GeoContext context);
}


public class MySeeder : ISeeder
{
    public void Seed(GeoContext context)
    {
        // Seed your database with initial data here

        // Create a new user instance
        var user = new User
        {
            Id = 1,
            Username = "JohnDoe",
            Verlofsaldo = 20
        };

        // Add the user to the context
        context.Set<User>().Add(user);

        // Save changes to persist the data in the database
        context.SaveChanges();
    }
}
