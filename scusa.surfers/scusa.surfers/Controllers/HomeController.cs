using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using System.Net;
using scusa.surfers.Models;

namespace scusa.surfers.Controllers
{
    public class HomeController : Controller
    {
		

        public ActionResult Index()
        {

			var vm = new IndexModel();
			vm.TopRated = DataAccess.FetchTopRatedPlaces();
			vm.LatestReviews = DataAccess.FetchLatestReviews();
            return View(vm);
        }

		public ActionResult List()
		{
			// need some search results.
			return View();
		}

		public ActionResult SearchQueryExecution(string searchInput)
		{
			var results = DataAccess.SearchLocationsByName(searchInput);

			return View("List", results);
		}

		public ActionResult ReviewInputExecution(string reviewTextArea, string rating, string placeId)
		{
			int placeID = Convert.ToInt32(placeId);
			DataAccess.InsertReviews(reviewTextArea, rating, placeID);
			var vm = new PlaceViewModel();
			vm.Place = DataAccess.FetchPlaceById(placeID);
			vm.Rating = DataAccess.GetRatingAvg(placeID);
			vm.Reviews = DataAccess.FetchReviewByPlaceId(placeID);
			vm.Images = DataAccess.FetchImageById(placeID);
			return View("ViewPlace", vm);
		}

		public ActionResult TopRated()
		{

			return View("View");
		}

		public ActionResult ViewPlace(int id)
		{
			var vm = new PlaceViewModel();
			vm.Place = DataAccess.FetchPlaceById(id);
			vm.Rating = DataAccess.GetRatingAvg(id);
			vm.Reviews = DataAccess.FetchReviewByPlaceId(id);
			vm.Images = DataAccess.FetchImageById(id);
			return View(vm);
		}

		public ActionResult FileUpload(string placeId, string LocationID, string placeCategory, HttpPostedFileBase file)
		{
			int id = int.Parse(placeId);

			if (file != null)
			{
				file.SaveAs(Server.MapPath("~/Images/"+ placeCategory + "/" + LocationID + "/" + file.FileName));
				string filePath = "../../Images/" + placeCategory + "/" + LocationID + "/" + file.FileName;
				DataAccess.SaveImage(filePath, id);
			}

			return RedirectToAction("ViewPlace/" + placeId);
		}
    }
}
