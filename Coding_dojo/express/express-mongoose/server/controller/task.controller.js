const Task = require('../models/task.model');

module.exports.getAllTasks = async (req, res) => {
    try {
        const taskList = await Task.find()
        res.json({ tasks: taskList });
    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido enviar las listas de tarea',
            error,
        });
    }
};

module.exports.createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body)
        res.json({ task: newTask });
    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido crear la tarea',
            error,
        });
    }
};

module.exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({ task: updatedTask });
    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido actualizar la tarea',
            error,
        });
    }
};

module.exports.deleteTask = async (req, res) => {
    try {
        const response = await Task.deleteOne({ _id: req.params.id })
        res.json({ Response });
    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido eliminar la tarea',
            error,
        });
    }
}

module.exports.getOneTask = async (req,res)=>{
    try {
        const oneTask = await Task.findById(req.params.id)
        res.json({task: oneTask})
    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido encontrar la tarea',
            error,
        });
    }
}

