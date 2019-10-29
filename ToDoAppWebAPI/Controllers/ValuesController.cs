using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ToDoAppWebAPI.Controllers
{
    //[EnableCors("*","*","*")]
    public class ValuesController : ApiController
    {
        // GET api/values
        private static List<string> data;
        public  ValuesController()
        {
          
            //data = new List<string>();
            //data.Add("Take a Break");
            //data.Add("Write notes");
        }
        [HttpPost]
        [Route("api/UpdateList")]
        public List<string> UpdateList(List<string> dataTemp)
        {
            data = dataTemp;
            return data;
        }
        [Route("api/GetList")]
        public List<Employee> Get()
        {
            Database database = new Database();
            var EmployeeList = database.Employees.ToList();
            return EmployeeList;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void SubmitData(string value)
        {
            data.Add(value);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
