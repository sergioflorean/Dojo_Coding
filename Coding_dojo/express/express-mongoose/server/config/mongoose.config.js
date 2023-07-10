const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/taks_manager_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(() => console.log("established connection to database"))
    .catch(err => console.log("comething went wrong ", err));


