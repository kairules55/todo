const Task = require("../models/tasks");

class HomeController {
  home(request, response) {
    Task.find({}, function(error, tasks) {
      if (error) {
        console.log("Error in fetching contacts");
        return;
      }
      response.json(tasks);
    });
  }

  createTask(request, response) {
    Task.create(request.body, function(error, new_task) {
      if (error) {
        console.log("Error in creating task");
        return;
      }
      console.log(new_task);
      response.redirect("/");
    });
  }

  deleteTask(request, response) {
    const id = request.query.id;
    Task.findByIdAndDelete(id, function(error) {
      if (error) {
        console.log("Error while deleteing contact");
        return;
      }
      response.redirect("back");
    });
  }
}

module.exports = HomeController;
