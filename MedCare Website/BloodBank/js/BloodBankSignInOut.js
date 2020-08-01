/*var url = new URL(window.location.href);

    var query_string = url.search;

    var search_params = new URLSearchParams(query_string); 

    var passedvalue = search_params.get('email');*/

// code
function signuppage() {
  window.location.href = "signupBloodBank.html";
}

function loginpage() {
  window.location.href = "signinBloodBank.html";
}

function signup() {
  // function for signup

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var userPass1 = document.getElementById("password_field1").value;

  if (userPass == userPass1) {
    if (userEmail.length == 0 || userPass.length == 0) {
      window.alert("Please Enter Username and Password");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(userEmail, userPass)
        .then(function () {
          sessionStorage.setItem("userEmail", userEmail);
          window.location.href = "bbregNew.html";
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          window.alert("Email or Password is incorrect");
          // An error happened.
        });
    }
  } else {
    window.alert("Both Password Not Matching");
  }
}

function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  if (userEmail.length == 0 || userPass.length == 0) {
    window.alert("Please Enter Username & Password");
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPass)
      .then(function () {
        var emailfound = "";

        // window.location.href="bbupdation.html?email="+userEmail;

        var ref1 = firebase.database().ref().child("BloodBank");
        ref1.on("value", function (snapshot) {
          var array = snapshot.val();
          var parent = "";
          Object.entries(array).forEach((entry) => {
            parent = entry[0];

            list = entry[1];
            Object.entries(list).forEach((entry1) => {
              // console.log(entry1)

              if (userEmail == entry1[1]) {
                sessionStorage.setItem("name", parent);
                window.location.href =
                  "bbupdateNew.html?email=" + userEmail + "&nameid=" + parent;
                // window.location.href = "bbupdation.html";
              }
            });
          });
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Password or Email is incorrect");
        // An error happened.
      });
  }
}

function logout() {
  window.location.href = "signinBloodBank.html";
}

function signout() {
  window.location.href = "../../index.html";
}

function homepage() {
  window.location.href = "../index.html";
}
