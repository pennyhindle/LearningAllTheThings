using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExerciseMVC.Models;

namespace ExerciseMVC.Controllers
{
    public class ToDoController : Controller
    {

        static IList<ToDo> ToDoList = new List<ToDo>()
        {
            new ToDo() { name = "Team meeting"},
            new ToDo() { name = "Send important email"},
            new ToDo() { name = "Support ticket"},
            new ToDo() { name = "Dev meeting"},
            new ToDo() { name = "Presentation"},
            new ToDo() { name = "Play table football"},
        };
        // GET: ToDo
        public ActionResult Index()
        {
            return View(ToDoList);
        }

        public ActionResult Create()
        {
            return View("Create");
        }

        [HttpPost]
        public ActionResult Create(ToDo todo)
        {
            ToDoList.Add(todo);
            return RedirectToAction("Index");
        }
    }
}