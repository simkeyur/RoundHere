using System;
using System.Collections.Generic;

namespace scusa.surfers.Models
{
	public class PlaceViewModel
	{
		public scusa.surfers.DataAccess.CreateModel Place { get; set; }
		public scusa.surfers.DataAccess.CreateModel Rating { get; set; }
		public IEnumerable<scusa.surfers.DataAccess.ReviewModel> Reviews { get; set; }
		public IEnumerable<scusa.surfers.DataAccess.ImageModel> Images { get; set; }
	}
}