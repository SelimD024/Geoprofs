using System.Collections.Immutable;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public static class RouteConfig
{ 
    public static void SetRoutes(WebApplication app)
    {
        // Route structuur voor onze API
        app.MapControllerRoute(
            name: "api",
            pattern: "{controller=Home}/{action=Index}/{id?}");

        

    }
        
     
    
}   

        