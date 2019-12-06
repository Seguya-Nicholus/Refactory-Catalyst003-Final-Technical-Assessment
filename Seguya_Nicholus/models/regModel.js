const mongoose = require("mongoose");
// schema definition
const studentSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: "Please Enter Surname"
  },
  givenname: {
    type: String,
    require: "Please Enter Given Name"
  },
  gender: String,
  dob: String,
  country: {
    type: String,
    required: "Please Select Country"
  },
  residence: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  emailAddress: {
    type: String
  },
  skills: {
    type: String
  },
  projects: {
    type: String
  }
});


// Creating an instance of the model
module.exports = mongoose.model("Student", studentSchema);