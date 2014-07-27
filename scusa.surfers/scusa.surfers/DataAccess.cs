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

			builder.UserID = "sql_RoundHere";
			builder.Password = "sql_r08ndh3r3!";
			builder.InitialCatalog = "InternProjects";
			builder.DataSource = "RCHPWVMGMSQL02.prod.corpint.net\\MANAGEMENT02";

			return new SqlConnection(builder.ToString());
		}



		public static void SaveTestUserWithDapper(string name, string zip, DateTime dateOfBirth)
		{
			using (var connection = CreateConnection())
			{
				connection.Execute(TestModel.InsertTest, new
				{
					name = name,
					dob = dateOfBirth,
					zip = zip,
					age = 15
				});
			}
		}

		public static void SavePlacesWithDapper(string nameinput, string addressinput, string zipcodeinput, string cityinput, string phoneinput, string category, string locationtype, string rate, string review)
		{
			string mergredAddress = addressinput + cityinput + zipcodeinput + phoneinput;
			using (var connection = CreateConnection())
			{
				connection.Execute(CreateModel.InsertPlace, new
				{
					name = nameinput,
					address = addressinput + cityinput + zipcodeinput + phoneinput,
					zip = zipcodeinput,
					city = cityinput,
					phone = phoneinput,
					category = category,
					location = locationtype,
					rate = rate,
					review = review
				});
			}
		}
		

        //newly created class model for database
        public class CreateModel
        {
			public static readonly string InsertPlace = "INSERT INTO RoundHere.Place (cName, cPlaceCategory, cAddress, dXcoordinates, dYcoordinates, LocationID, cDescription) VALUES (@name, @category, @address,'1', '1', '2', @review);";
         
           //dont know how the ID part will work
            public int Id { get; set; }
            public string Name { get; set; }
            public string ImageID { get; set; }
            public int PlaceCategory { get; set; }
            public string OperationalHoursID { get; set; }
            public int Address { get; set; }
            public string LocationID { get; set; }
            public string Description { get; set; }

        }

		
        

		public class TestModel
		{
			public static readonly string InsertTest = "INSERT INTO RoundHere.TEST (cName, dDob, nZipCode, nAge) VALUES (@name, @dob, @zip, @age);";
			public static readonly string SelectById = "SELECT TOP 1 TestId as Id, cName as Name, dDob as DateOfBirth, nZipCode as Zip, nAge as Age FROM RoundHere.TEST WHERE TestID = @id";

			public int Id { get; set; }
			public string Name { get; set; }
			public DateTime DateOfBirth { get; set; }
			public int Zip { get; set; }
			public int  Age { get; set; }
		}

		public static TestModel FetchById(int id)
		{
			TestModel model = null;

			using (var connection = CreateConnection())
			{
				model = connection.Query<TestModel>(TestModel.SelectById, new { id = id }).FirstOrDefault();
			}

			return model;
		}

	}
}