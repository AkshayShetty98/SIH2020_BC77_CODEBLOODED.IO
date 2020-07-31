var x;
var c1, c2, c3, c4, c5, c6, c7;
var akkihospitalName = document.querySelector("#HospitalName");
/*
var url = new URL(window.location.href);

var query_string = url.search;

var search_params = new URLSearchParams(query_string); */

var ids = sessionStorage.getItem("userEmail1");
var hosp = "";

var ref = firebase.database().ref().child("Hospital");
ref.on("value", function (snapshot) {
  var hospital = snapshot.val(); //console.log(hospital)  object list of the hospital data
  Object.entries(hospital).forEach((entry) => {
    //console.log(entry)   location list
    var locval = entry[1];
    var parenthospitalname = "";
  
      Object.entries(locval).forEach((hospitalname) => {
        //replaced entries(locval) to entries(fx)
        parenthospitalname = hospitalname[0];

        //console.log(emailrequiered)
        var emailcheck = hospitalname[1];
        //console.log(emailrequiered);
        Object.entries(emailcheck).forEach((emailfound) => {
          var email = emailfound[0];
          var id = emailfound[1];

          if (id == ids) {
            hosp = parenthospitalname;
          }
        });
      }); //
    });
  });

// creating of table function for requested appointment
function insRow() {
  x = document.getElementById("table").insertRow(1);
  c1 = x.insertCell(0);
  c2 = x.insertCell(1);
  c3 = x.insertCell(2);
  c4 = x.insertCell(3);
  c5 = x.insertCell(4);

  c6 = x.insertCell(5);
}
// for requested appointment
// same code for accepted appointment except a single condition

$(document).ready(function () {
  var ref1 = firebase.database().ref().child("Appointments");
  ref1.on("value", function (snapshot) {
    var randomkeys = snapshot.val();
    Object.entries(randomkeys).forEach((entry) => {
      var appointmentdetail = entry[1];
      var boolean = false;
      var bool = 0;
      var bool2 = 0;
      var names = "";
      var emailofthe = "";

      Object.entries(appointmentdetail).forEach((entry2) => {
        if (entry2[0] == "approval" && entry2[1] == 0) {
          bool = 1;
        }
        if (entry2[0] == "avisited" && entry2[1] == 0) {
          bool2 = 1;
          console.log(bool2);
        }

        if (bool == 1 && bool2 == 1) {
          if ("date" == entry2[0]) {
            datesfinal = entry2[1];
          }

          if (entry2[1] == hosp) {
            boolean = false;
            akkihospitalName.textContent = entry2[1];
            console.log(entry2[1]);
            insRow();
            boolean = true;
          }
          if (boolean) {
            if (entry2[0] == "name") {
              c1.innerHTML = entry2[1];
              names = entry2[1];
            }
            if (entry2[0] == "specialist") {
              c2.innerHTML = entry2[1];
            }
            if (entry2[0] == "time") {
              c3.innerHTML = datesfinal;
              c4.innerHTML = entry2[1];
              c5.innerHTML =
                "<button style='margin:auto' value='" +
                names +
                "' id='" +
                entry[0] +
                "' onclick='approve(this.value,this.id)'><i class='fas fa-check-circle'></i></button>";
              c6.innerHTML =
                "<button style='margin:auto' value='" +
                names +
                "' id='" +
                entry[0] +
                "' onclick='Reject(this.value,this.id)'><i class='fas fa-times-circle'></i></button>";
            }
          }
        }
      });
    });
  });
});
// creating table for accepted appointment

function insRow1() {
  x = document.getElementById("accepted").insertRow(1);
  c1 = x.insertCell(0);
  c2 = x.insertCell(1);
  c3 = x.insertCell(2);
  c4 = x.insertCell(3);
}

// for accepted appointment
// another table function

$(document).ready(function () {
  var ref2 = firebase.database().ref().child("Appointments");
  ref2.on("value", function (snapshot) {
    var pres;
    var randomkeys = snapshot.val();

    Object.entries(randomkeys).forEach((entry) => {
      pres = entry[0];
      var appointmentdetail = entry[1];
      var boolean = false;
      var bool = 0;
      var bool2 = 0;
      var emailofthe = "";
      Object.entries(appointmentdetail).forEach((entry2) => {
        if (entry2[1] == 1) {
          bool = 1;
        }
        if (entry2[0] == "avisited" && entry2[1] == 0) {
          bool2 = 1;
        }

        if (bool == 1 && bool2 == 1) {
          if ("date" == entry2[0]) {
            datesfinal = entry2[1];
          }
          if (entry2[0] == "email") {
            emailofthe = entry2[1];
            //console.log(emailofthe)
          }
          if (entry2[1] == hosp) {
            boolean = false;
            console.log(entry2[1]);
            akkihospitalName.textContent = entry2[1];
            console.log(entry2[1]);
            insRow1();
            boolean = true;
          }
          if (boolean) {
            if (entry2[0] == "name") {
              //c1.innerHTML="<a href='Hospital.html?key="+entry2[1]+"' style='color:black'>"+entry2[1]+"</a>";
              c1.innerHTML =
                "<data onclick='nextpage(this.id,this.className,this.value)' value='" +
                pres +
                "'  class='" +
                emailofthe +
                "' id='" +
                entry2[1] +
                "'>" +
                entry2[1] +
                "</data>";
            }

            if (entry2[0] == "specialist") {
              c2.innerHTML = entry2[1];
              c3.innerHTML = datesfinal;
            }
            if (entry2[0] == "time") {
              c4.innerHTML = entry2[1];
            }
          }
        }
      });
    });
  });
});

function nextpage(id, email, userkey) {
  console.log(userkey);
  sessionStorage.setItem("key", id);
  sessionStorage.setItem("emailoftheuser", email);
  sessionStorage.setItem("userkey", userkey);
  window.location.href = "profileNew.html";
}

function approve(value, data) {
  var approvalkey = "";
  /*window.alert(value);
window.alert(data)
*/
  var ref2 = firebase.database().ref().child("Appointments").child(data);
  ref2.child("approval").set(1);
  document.location.reload();
}
function Reject(value, data) {
  var approvalkey = "";
  //window.alert(value);
  //window.alert(data)

  var ref2 = firebase.database().ref().child("Appointments").child(data);
  ref2.child("approval").set(2);
  document.location.reload();
}

function logout() {
  window.location.href = "signin.html";
}

function Prescomm(random) {
  var prescription = document.getElementById(random).value;
  var comment = document.getElementsByClassName(random)[0].value;
  var ref2 = firebase.database().ref().child("Appointments").child(random);
  ref2.child("prescription").set(prescription);
  var ref2 = firebase.database().ref().child("Appointments").child(random);
  ref2.child("comments").set(comment);
  var ref2 = firebase.database().ref().child("Appointments").child(random);
  ref2.child("avisited").set(1);

  document.location.reload();
}
