//sagar code

function signup() {
  // function for signup

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  sessionStorage.setItem("userEmail1", userEmail);

  var userPass1 = document.getElementById("password_field1").value;
  if (userPass1 == userPass) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, userPass)
      .then(function () {
           //window.location.href="HospitalRegistrationForm.html?email="+userEmail;
        window.location.href = "HospitalRegistrationForm.html";
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Email or Password is incorrect");
        // An error happened.
      });
  } else {
    window.alert("Both Password should be same");
  }
}

function signuppage() {
  window.location.href = "signupnew.html";
}
function loginpage() {
  window.location.href = "signinakki.html";
}

function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .then(function () {
      sessionStorage.setItem("userEmail1", userEmail);
      window.location.href = "AppointmentNew.html";
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Password or Email is incorrect");
      // An error happened.
    });
}

function logout() {
  firebase.auth().signOut();
}

function homepage() {
  window.location.href = "index.html";
}
