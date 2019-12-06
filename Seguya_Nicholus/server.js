// Require Packages
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Create our Express Application
const app = express();

// Set view Engine
app.set("view engine", "pug");

// Specify where the engine is to pick views 
let joinedPath = path.join(__dirname, "views");
app.set('views', joinedPath);

app.use(bodyParser.urlencoded({ extended: true }));

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public')))

// mongoose database connection
mongoose.connect("mongodb://localhost:27017/student-db", () => { console.log('Database Connection Successful') });

const registrationRoute = require("./routes/regRoutes");
app.use("/register", registrationRoute);


// Make the Express App listen on a certain port
app.listen(5000, () => {
  console.log("App now Listening for requests on port 5000");
});