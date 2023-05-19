using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using GeoCore.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace GeoCore.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly GeoContext _context;
    
    
    public HomeController(ILogger<HomeController> logger, GeoContext context)
    {
        _context = context;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> Index(Verlof verlof)
    {
        if (ModelState.IsValid)
        {
            _context.Add(verlof);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }
        return View(verlof);
    }

    public IActionResult Index()
    {
        return View(new Verlof());
    }

    public IActionResult Privacy()
    {
        
        return View();
    }

    public IActionResult Viewdata()
    {
        var items = _context.Verloven.ToList();

        if (items == null)
        {
            items = new List<Verlof>();
        }

        return View(items);
    }
    

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}