//Dependencies
const express = require("express");
const app = express();

//Sets an initial port
const PORT = process.env.PORT || 8080;

//Sets up initial app to handle data parsing

app.use(express.urlencoded({extended: true}));
app.use(express.json());


//Link to css 
app.use(express.static("public"));

//Route

require("./Routes/htmlRoutes")(app);
require("./Routes/apiRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

