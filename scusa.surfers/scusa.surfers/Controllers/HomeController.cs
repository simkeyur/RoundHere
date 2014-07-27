using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using System.Net;

namespace scusa.surfers.Controllers
{
    public class HomeController : Controller
    {
		

        public ActionResult Index()
        {
            return View();
        }

		public ActionResult List()
		{
			return View();
		}


		public ActionResult TestPage()
		{
			return View();
		}

		public ActionResult TestFetch(int id)
		{
			return Json(DataAccess.FetchById(id), JsonRequestBehavior.AllowGet);
		}

		public ActionResult TestQueryExecution(string nameInput, string zipInput, DateTime dobInput)
		{
			DataAccess.SaveTestUserWithDapper(nameInput, zipInput, dobInput);

			return RedirectToAction("TestPage");
		}

		public ActionResult TopRated()
		{
			return View();
		}

		public ActionResult ViewPlace()
		{
			return View();
		}

     
    }
}
