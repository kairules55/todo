
const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const Task = require('./models/tasks');
const app = express();

//Middleware
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use('/',require('./routes'));



//Setup view engine
app.set('view engine','ejs');
app.set('views', './views');


//Start the server
app.listen(port,function(error){
    if(error){
        console.log(`Error: ${error}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
}); 