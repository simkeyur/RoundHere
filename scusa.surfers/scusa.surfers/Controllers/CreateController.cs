using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using System.Net;

namespace scusa.surfers.Controllers
{
    public class CreateController : Controller
    {
        //
        // GET: /Create/

        public ActionResult Index()
        {
            return View();
        }

		public ActionResult CreateQueryExecution(string nameinput, string addressinput, string zipcodeinput, string cityinput, string phoneinput, string category, string locationtype, string rate, string review)
		{
			// TODO: I have no idea what this was supposed to do.
			// CreateQuery testModel = new CreateQuery(nameinput, addressinput, zipcodeinput, cityinput, phoneinput, category, locationtype, rate, review);
			DataAccess.SavePlacesWithDapper(nameinput, addressinput, zipcodeinput, cityinput, phoneinput, category, locationtype, rate, review);
			return RedirectToAction("Index");
		}

    }
}
