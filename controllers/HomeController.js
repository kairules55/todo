const Task = require('../models/tasks');


class HomeController{
    home(request,response){
        Task.find({},function(error,tasks){
            if(error){
                console.log('Error in fetching contacts');
                return;
            }
            response.render('home',{
                title: 'ToDo',
                tasks: tasks
            });
        });
    }

    createTask(request,response){
        Task.create(request.body, function(error,new_task){
            if(error){
                console.log('Error in creating task');
                return;
            }
            console.log(new_task);
            response.redirect('/');
        });
    }
}

module.exports = HomeController; 