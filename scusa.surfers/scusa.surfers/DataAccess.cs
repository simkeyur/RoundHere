using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using Dapper;

namespace scusa.surfers
{
	public class DataAccess
	{
		private static IDbConnection CreateConnection()
		{
			var builder = new SqlConnectionStringBuilder();
			
			/*
			//builder.UserID = "sql_RoundHere";
			//builder.Password = "sql_r08ndh3r3!";
			builder.IntegratedSecurity = true;
			builder.InitialCatalog = "InternProjects";
			builder.DataSource = @".\sqlexpress";
			*/
			
			builder.UserID = "sql_RoundHere";
			builder.Password = "sql_r08ndh3r3!";
			builder.InitialCatalog = "InternProjects";
			builder.DataSource = "RCHPWVMGMSQL02.prod.corpint.net\\MANAGEMENT02";
			

			return new SqlConnection(builder.ToString());
		}

        public static void SaveImage(string path, int placeID)
        {
            using (var connection = CreateConnection())
            {
                connection.Execute(ImageModel.InsertImage, new
                {
                    imageLocation = path,
                    placeID = placeID,
                });
            }
        }

       
		public static void InsertReviews(string review, string rating, int placeID)
		{
			using (var connection = CreateConnection())
			{
				connection.Execute(ReviewModel.InsertReview, new
				{
					review = review,
					rating = rating,
					placeID = placeID,
					createDate = DateTime.Now
				});
			}
		}

		public static void SavePlacesWithDapper(string nameinput, string addressinput, string zipcodeinput, string cityinput, string phoneinput, string category, string locationtype, string state, string review)
		{
			using (var connection = CreateConnection())
			{
				connection.Execute(CreateModel.InsertPlace, new
				{
					name = nameinput,
					address = String.Format("{0}, {1}{2}, {3}{4}, {5}{6}", addressinput, Environment.NewLine, cityinput, Environment.NewLine, state, Environment.NewLine, zipcodeinput),
					zip = zipcodeinput,
					city = cityinput,
					phone = phoneinput,
					category = category,
					location = locationtype,
					state = state,
					review = review
				});

			
			}
		}

		private string Encode(string value)
		{
			return value
				.Replace("%", "[%]")
				.Replace("[", "[[]")
				.Replace("]", "[]]");
		}

		public static IEnumerable<SearchModel> SearchLocationsByName(string searchInput)
		{
			using (var connection = CreateConnection())
			{
				return connection.Query<SearchModel>(SearchModel.SelectByName, new
				{
					searchQuery = string.Concat("%", searchInput, "%")
				});
			}
		}

		public class ReviewModel
		{
			public static readonly string InsertReview = "INSERT INTO RoundHere.Review (cReview, dReviewDate, nValue, PlaceID) VALUES (@review, @createDate, @rating, @PlaceID);";
			public static readonly string SelectByPlaceId = "SELECT ReviewID as Id, cReview as review, dReviewDate as createDate, nValue as rating, PlaceID as placeID FROM RoundHere.Review WHERE PlaceID = @id ORDER BY dReviewDate DESC;";

			public int Id { get; set; }
			public string count { get; set; }
			public string review { get; set; }
			public string createDate { get; set; }
			public string rating { get; set; }
			public string placeID { get; set; }
		}

		public class TopRatedModel
		{
			public static readonly string SelectTopRatedPlaces = "SELECT TOP 10 Place.PlaceId as Id, Place.cName as name, Review.nValue as rating FROM RoundHere.Place INNER JOIN RoundHere.Review ON Review.PlaceID=Place.PlaceId ORDER BY Review.nValue DESC;";

			public int Id { get; set; }
			public string name { get; set; }
			public string rating { get; set; }
		}

		public class LatestReviews
		{
			public static readonly string SelectLatestReviews = "SELECT TOP 10 Place.PlaceId as Id, Place.cName as name, Review.cReview as reviews, Review.dReviewDate as date FROM RoundHere.Place INNER JOIN RoundHere.Review ON Review.PlaceID=Place.PlaceId ORDER BY Review.dReviewDate DESC;";

			public int Id { get; set; }
			public string name { get; set; }
			public string reviews { get; set; }
			public string date { get; set; }
		}

		public class SearchModel
		{
			public static readonly string SelectByName = "SELECT PlaceId as Id, cName as Name, cPlaceCategory as PlaceCategory, LocationID as LocationID, cAddress as Address, nPhoneNumber as PhoneNumber, cDescription as Description FROM RoundHere.Place WHERE cName LIKE @searchQuery;";

			public static readonly string GetRating = "SELECT AVG(nValue) as rating_avg FROM RoundHere.Review WHERE PlaceID = @id";

			public int Id { get; set; }
			public string Name { get; set; }
			public string ImageID { get; set; }
			public string PlaceCategory { get; set; }
			public string OperationalHoursID { get; set; }
			public string PhoneNumber { get; set; }
			public string Address { get; set; }
			public string LocationID { get; set; }
			public string Description { get; set; }
		}

        //hour model

        public class HourModel
        {
            public static readonly string InsertHours = "INSERT INTO RoundHere.Place (bSunCheckID, bMonCheckID, bTueCheckID, bWedCheckID, bThursCheckID, bFriCheckID, bSatCheckID, cSunOpenID, cMonOpenID, cTueOpenID, cWedOpenID, cThursOpenID, cFriOpenID, cSatOpenID, cSunCloseID, cMonCloseID, cTueCloseID, cWedCloseID, cThurCloseID, cFriCloseID, cSatCloseID) VALUES ();";
        }
        //newly created class model for database

        public class CreateModel
		{


			public static readonly string InsertPlace = "INSERT INTO RoundHere.Place (cName, cPlaceCategory, cAddress, nPhoneNumber, dXcoordinates, dYcoordinates, LocationID, cDescription) VALUES (@name, @category, @address, @phone, '1', '1', @location, @review);";
			
			public static readonly string SelectById = "SELECT TOP 1 PlaceId as Id, cName as Name, cPlaceCategory as PlaceCategory, LocationID as LocationID, cAddress as Address, nPhoneNumber as PhoneNumber, cDescription as Description FROM RoundHere.Place WHERE PlaceID = @id";

			public static readonly string GetRating = "SELECT AVG(nValue) as rating_avg FROM RoundHere.Review WHERE PlaceID = @id";
           
			//dont know how the ID part will work
            public int Id { get; set; }
            public string Name { get; set; }
            public string PlaceCategory { get; set; }
            public string Address { get; set; }
			public string PhoneNumber { get; set; }
            public string LocationID { get; set; }
            public string Description { get; set; }
			public string rating_avg { get; set; }


        }

		public class ImageModel
		{
			public static readonly string InsertImage = "INSERT INTO RoundHere.Image (cimageLocation, placeID) VALUES (@imagelocation, @placeid);";
			public static readonly string SelectById = "SELECT imageID as Id, cImageLocation as path, placeID as placeid FROM RoundHere.Image WHERE placeID = @id";

			public int Id { get; set; }
			public string path { get; set; }
			public int placeID { get; set; }


		}


		public static CreateModel FetchPlaceById(int id)
		{
			using (var connection = CreateConnection())
			{
				return connection.Query<CreateModel>(CreateModel.SelectById, new { id = id }).FirstOrDefault();
			}
		}

		public static CreateModel GetRatingAvg(int id)
		{
			using (var connection = CreateConnection())
			{
				return connection.Query<CreateModel>(CreateModel.GetRating, new { id = id }).FirstOrDefault();
			}
		}

		public static IEnumerable<TopRatedModel> FetchTopRatedPlaces()
		{
			using (var connection = CreateConnection())
			{
				return connection.Query<TopRatedModel>(TopRatedModel.SelectTopRatedPlaces);
			}
		}

		public static IEnumerable<LatestReviews> FetchLatestReviews()
		{
			using (var connection = CreateConnection())
			{
				return connection.Query<LatestReviews>(LatestReviews.SelectLatestReviews);
			}
		}

		public static IEnumerable<ReviewModel> FetchReviewByPlaceId(int id)
		{
			using (var connection = CreateConnection())
			{
				return connection.Query<ReviewModel>(ReviewModel.SelectByPlaceId, new { id = id });
			}
		}

		public static IEnumerable<ImageModel> FetchImageById(int id)
		{
			using (var connection = CreateConnection())
			{
				return connection.Query<ImageModel>(ImageModel.SelectById, new { id = id });
			}
		}

		
	}
}