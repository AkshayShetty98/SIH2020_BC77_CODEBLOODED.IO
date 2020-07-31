var name="";
var email="";
var asprin=0;
var Benadryl=0;
var ibuprofen=0;
var lisinoptil=0;
var morphine=0;
var paracetamol=0;
var sinarest=0;
var strepsil=0;
var vitamin=0;
var Vicks=0;
function addtofirebase()
{
	 name = document.getElementById("name").value;

	 email = document.getElementById("email").value;

	 address = document.getElementById("Address").value;

	 loclink = document.getElementById("locationlink").value;

	 	  var place = document.getElementById("selected").value;
	    

	 asprin= parseInt($("input[name='optradio1']:checked").val());
	//console.log(abneg);
 	 Benadryl= parseInt($("input[name='optradio2']:checked").val());
 	//console.log(abpos);
 	 ibuprofen= parseInt($("input[name='optradio3']:checked").val());
 	//console.log(aneg);
 	 lisinoptil= parseInt($("input[name='optradio4']:checked").val());
 	//console.log(apos);
 	 morphine= parseInt($("input[name='optradio5']:checked").val());

 	 paracetamol= parseInt($("input[name='optradio6']:checked").val());
 	//console.log(opos);
 	 sinarest= parseInt($("input[name='optradio7']:checked").val());
 	//console.log(bneg);
 	 strepsil= parseInt($("input[name='optradio8']:checked").val());

 	  Vicks= parseInt($("input[name='optradio9']:checked").val());

 	   vitamin= parseInt($("input[name='optradio10']:checked").val());


 	if (name.length == 0)
 	{
 		window.alert("All the fields are required");
 	}
 	else
 	{
 		
		 
		var ref1 = firebase.database().ref().child("Pharmacy").child(name);
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
			ref1.child("Asprin").set(asprin);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Benadryl").set(Benadryl);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Ibuprofen").set(ibuprofen);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Lisinopril").set(lisinoptil);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Morphine").set(morphine);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Paracetamol").set(paracetamol);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Sinarest").set(sinarest);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Strepsil").set(strepsil);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Vicks").set(Vicks);
		});
		ref1.on("value", function(snapshot) {
			ref1.child("Vitamin C").set(vitamin);
		});

		setTimeout(function(){ 

		sessionStorage.setItem("nameid", name);	
		window.location.href="pharmacyupdation.html";
		
		}, 3000);



		
			
			

	}
}


