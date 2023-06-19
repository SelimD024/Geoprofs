using System.Collections.Immutable;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public static class RouteConfig
{ 
    public static void SetRoutes(WebApplication app)
    {
        // Home controller
        app.MapControllerRoute(
            name: "api",
            pattern: "{controller=Api}/{action=Verlof}/{id?}");
        // {controller=Forms}/
        
        // {controller=Forms}/

    }
    
     
    
}   

        