const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'debe tenerun titulo para la tarea'],
        minlength: [3, 'una tarea debe tener al menos tres caracteres']
    },
    description: {
        type: String,
        required: [true, 'debe tenerun titulo para la tarea'],
        maxlength: [100, 'una tarea debe tener maximo 100 caracteres']
    },
    status: {
        type: String,
        default: 'pendiente'
    },
    date_task: {
        type: Date,


    }
}, { timestamps: true });

const Task= model('Task', taskSchema);

module.exports = Task;