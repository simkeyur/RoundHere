using System;
using Dapper;

namespace scusa.surfers.Models
{

	// new rule: all columns must match the property names.
	// all 
	public class Place
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int OperationalHoursId { get; set; }
		public int ImageID { get; set; }
		public string PlaceCategory { get; set; }
		public string Address { get; set; }
		public string Xcoordinates { get; set; }
		public string Ycoordinates { get; set; }
		public string LocationID { get; set; }
		public string Description { get; set; }
		public string Available { get; set; }
		// PlaceCategory
		// Address
		// Xcoordinates
		// Ycoordinates
		// LocationID
		// Description
		// Available
	}
}