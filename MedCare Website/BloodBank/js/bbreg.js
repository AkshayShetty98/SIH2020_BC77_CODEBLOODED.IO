var name="";
var email="";
var abneg=0;
var abpos=0;
var aneg=0;
var apos=0;
var oneg=0;
var opos=0;
var bneg=0;
var bpos=0;
function addtofirebase()
{
	 name = document.getElementById("name").value;

	 email = document.getElementById("email").value;

	 address = document.getElementById("Address").value;

	 loclink = document.getElementById("locationlink").value;

	 	  var place = document.getElementById("selected").value;
	    

	 abneg= parseInt(document.getElementById("radio11").value);
	//console.log(abneg);
 	 abpos= parseInt(document.getElementById("radio12").value);
 	//console.log(abpos);
 	 aneg= parseInt(document.getElementById("radio13").value); 	
 	// console.log(aneg);
 	 apos= parseInt(document.getElementById("radio14").value);
 	//console.log(apos);
 	 oneg= parseInt(document.getElementById("radio15").value);
 	//console.log(oneg);
 	 opos= parseInt(document.getElementById("radio16").value);
 	//console.log(opos);
 	 bneg= parseInt(document.getElementById("radio17").value);
 	//console.log(bneg);
 	 bpos= parseInt(document.getElementById("radio18").value);
 	//console.log(bpos);
	//console.log(typeof(bneg));

 	if (name.length == 0)
 	{
 		window.alert("All the fields are required");
 	}
 	else
 	{
 		
		 
		var ref1 = firebase.database().ref().child("BloodBank").child(name);
		console.log(name);
		ref1.on("value", function(snapshot) {
				ref1.child("Name").set(name);
			});


		ref1.on("value", function(snapshot) {
						ref1.child("Address").set(address);
					});

		ref1.on("value", function(snapshot) {
						ref1.child("Link").set(loclink);
					});


		ref1.on("value", function(snapshot) {
						ref1.child("Place").set(place);
					});


		ref1.on("value", function(snapshot) {
			ref1.child("Email").set(email);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("ABneg").set(abneg);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("ABpos").set(abpos);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Aneg").set(aneg);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Apos").set(apos);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Bneg").set(bneg);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Bpos").set(bpos);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Oneg").set(oneg);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Opos").set(opos);
		});

		setTimeout(function(){ 

			sessionStorage.setItem("name", name);
		window.location.href="bbupdation.html";
		
		}, 3000);



		
			
			

	}
}


