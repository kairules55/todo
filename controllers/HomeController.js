class HomeController{
    home(request,response){
        response.end('<h1>HomePage</h1>')
    }
}

module.exports = HomeController;