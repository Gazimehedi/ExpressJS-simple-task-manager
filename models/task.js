const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"please add task"]
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {timestamps: true, versionKey: false}
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;