const { Schema, model } = require('mongoose')

const jokeSchema = new Schema({
    setup: {
        type: String,
        required: [true, "el chiste debe tener un setup"],
        minlength: [10, "el setup debe tener al menos 10 caracteres"]
    },
    punchline: {
        type: String,
        minlength:[2, "debe tener al menos 10 caracteres"]
    }

}, { timestamps: true });

const Joke= model('Joke', jokeSchema);

module.exports = Joke;