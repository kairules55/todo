const express = require('express');
const port = 8000;

const app = express();


app.listen(port,function(error){
    if(error){
        console.log(`Error: ${error}`);
        return;
    }
    console.log(`Server is up and running on port: ${port}`);
});