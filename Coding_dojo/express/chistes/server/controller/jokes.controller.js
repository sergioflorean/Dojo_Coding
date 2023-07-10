const Joke = require('../models/jokes.model');

module.exports.getAllJokes = async (req, res) => {
    try {
        const jokesList = await Joke.find()
        res.json({ jokes: jokesList })

    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido enviar las listas de chistes',
            error,
        });

    }
}

module.exports.createJoke = async (req, res) => {
    try {
        const newJoke = await Joke.create(req.body)
        res.json({ joke: newJoke });
    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido crear el chiste',
            error,
        });
    }
};

module.exports.getOneJoke = async (req, res) => {
    try {
        const oneJoke = await Joke.findById(req.params.id)
        res.json({ joke: oneJoke })
    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido mostrar el chiste',
            error,
        });

    }
}

module.exports.updateJoke = async  (req, res) => {
    try {
        const updatedJoke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({ joke: updatedJoke })

    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido actualizar el chiste',
            error,
        });

    }
}

module.exports.deleteJoke = async (req,res) => {
    try {
        const response = await Joke.deleteOne({_id: req.params.id})
        res.json({response})
        
    } catch (error) {
        res.status(500).json({
            message: 'no hemos podido actualizar el chiste',
            error,
        });
    }
}