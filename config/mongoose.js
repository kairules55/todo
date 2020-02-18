var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to database using mongoose');
});


