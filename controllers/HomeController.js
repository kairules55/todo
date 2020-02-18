const Task = require('../models/tasks');


class HomeController{
    home(request,response){
        response.render('home',{
            titile: 'Todo List'
        });
    }

    createTask(request,response){
        console.log(request.body);
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