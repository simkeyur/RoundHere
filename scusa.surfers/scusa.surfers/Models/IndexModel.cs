using System;
using System.Collections.Generic;

namespace scusa.surfers.Models
{
	public class IndexModel
	{
		public IEnumerable<scusa.surfers.DataAccess.TopRatedModel> TopRated { get; set; }
		public IEnumerable<scusa.surfers.DataAccess.LatestReviews> LatestReviews { get; set; }
	}
}