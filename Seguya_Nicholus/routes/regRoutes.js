const express = require("express");
const Student = require("../models/regModel");
const router = express.Router();

//Render the registration form on the path /register
router.get("/", (req, res) => {
  res.render("register");
});

//Route for submitting information form the registration form
router.post("/", (req, res) => {
  const myData = new Student(req.body);
  myData
    .save()
    .then(item => {
      Student.find().then(items => {
        console.log("Data Saved to Database Successfully");
        res.render("list", { students: items });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
});



//export routes.
module.exports = router;
