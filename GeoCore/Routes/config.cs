using System.Collections.Immutable;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public static class RouteConfig
{ 
    public static void SetRoutes(WebApplication app)
    {
        // Home controller
        app.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");
        // {controller=Forms}/

        app.MapControllerRoute(
            name: "Userauth",
            pattern: "login",
            defaults: new {controller="Userauth", action="Login"}
        );
        
        app.MapControllerRoute(
            name: "Userauth",
            pattern: "register",
            defaults: new {controller="Userauth", action="Register"}
        );

        // {controller=Forms}/



    }
    
    
    
}   

        