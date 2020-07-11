using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GoldenShoe.Models;
using System.Data.SqlClient;

namespace GoldenShoe.Controllers
{
    public class AccountController : Controller
    {
        SqlConnection connection = new SqlConnection();
        SqlCommand command = new SqlCommand();

        // GET: Login
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }
        void connectionString()
        {
            connection.ConnectionString = "data source=DESKTOP-H5AVIB1; database=WPF; intergrated Security = SSPI;";
        }

        public ActionResult Verify(Account acc)
        {
            connectionString();
            connection.Open();
            command.Connection = connection;
            connection.Close();
            return View();
        }

        public ActionResult Success()
        {
            return View();
        }

    }
}