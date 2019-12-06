
    // declare variables to access form elements
    var surName = document.getElementById("surName");
    var givenName = document.getElementById('givenName');
    // var uGender = document.registration.gender;
    var udob = document.getElementById('Dob');
    // var ucountry = document.registration.country;
    // var uresindence = document.registration.residence;
    // var unumber = document.registration.phoneNumber;
    // var uemail = document.registration.emailAddress;
    // // var ugender = document.getElementById('radiobtn');

var formValidation = () => {
  
  if (surName.value == "") {
    alert("Fields should not be empty");
    surName.style.border = "2px solid red";
    
    //return false
  }

  // if (surName.value != "" && ) {
  //   alert("Data Saved Successfully");
  //   //return false
  // }
  // if (userName.value == "" && passw.value != "") {
  //   alert("Username should not be empty");
  //   userName.style.border = "2px solid red";
  // }
  // if (userName.value != "" && passw.value == "") {
  //   alert("Password should not be empty");
  //   passw.style.border = "2px solid red";
  // }

  
};
    