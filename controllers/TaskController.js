const Task = require("../models/task");

exports.GetTasks = async (req,res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({
            status:"success",
            data: tasks
        });
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
exports.CreateTask = async (req,res)=>{
    try {
        const {name} = req.body;
        if(name == ''){
            res.status(400).json({
                status:"error",
                message:"name field is required"
            });
        }
        const task = await Task.create({name});
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
exports.GetTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task =  await Task.find({_id:id});
        res.status(200).json({
            status:"success",
            data: task
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
exports.UpdateTask = async (req,res) => {
    try {
        const {id} = req.params;
        const {completed} = req.body;
        const task =  await Task.findByIdAndUpdate({_id:id},{completed},{
            new:true,
            runValidators:true
        });
        if(!task){
            res.status(404).json({
                status:"error",
                message: `no task with id = ${id}`
            });
        }
        res.status(200).json({
            status:"success",
            message: "Task updated successfully",
            data: task
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
exports.DeleteTask = async (req,res) => {
    try {
        const {id} = req.params;
        const task =  await Task.findByIdAndDelete(id);
        if(!task){
            res.status(404).json({
                status:"error",
                message: `no task with id = ${id}`
            });
        }
        res.status(200).json({
            status:"success",
            message: "Task delete successfully"
        });
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}