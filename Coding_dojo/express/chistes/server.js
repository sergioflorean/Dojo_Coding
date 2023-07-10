const express = require("express");
const app = express();
const port = 8000;
require('./server/config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

const routes = require('./server/routes/jokes.routes')
routes(app)

app.listen(port, () => console.log('we are running on port 8000'))