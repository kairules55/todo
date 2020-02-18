const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = new schema({
    description: String,
    category: String,
    date: Date
});

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;