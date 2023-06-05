namespace GeoCore.Controllers;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using GeoCore.Models;


public class UserauthController : Controller
{

    private readonly GeoContext _context;

    public UserauthController(GeoContext context)
    {
        _context = context;
    }

        public IActionResult Login()
        {
            return View();
        }

    [HttpPost]
    public async Task <IActionResult> Register(User user)
    {
        

        if (ModelState.IsValid)
        {
            _context.Add(user); 
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Register));
        }
        return View(user);
    }
    public IActionResult Register()
    {
        return View(new User());
    }
}