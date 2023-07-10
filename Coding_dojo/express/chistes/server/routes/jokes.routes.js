const { getAllJokes, createJoke, getOneJoke, updateJoke, deleteJoke } = require("../controller/jokes.controller");


module.exports = (app) => {
    app.get('/api/joke/', getAllJokes);
    app.get('/api/joke/:id/', getOneJoke);
    app.post('/api/joke/new/', createJoke);
    app.put('/api/joke/update/:id', updateJoke);
    app.delete('/api/joke/delete/:id', deleteJoke);
}