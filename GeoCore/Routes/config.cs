using System.Collections.Immutable;
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
        
    }
}   

        