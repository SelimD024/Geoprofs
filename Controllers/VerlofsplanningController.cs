using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Geoprofs.Controllers
{
    public class Verlofsplanning : Controller
    {
        public ActionResult Voorpagina()
        {
            Response.Headers.Add("My-Custdddom-header", "Header value");
            return View();
        }
    }
}