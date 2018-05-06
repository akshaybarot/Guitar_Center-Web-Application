var editBtn = document.getElementById("editBtn");
var buyBtn = document.getElementById("buyBtn");
var review = document.getElementById("review");

editBtn.addEventListener('click', function () {
	edit();
});
buyBtn.addEventListener('click', function () {
	location.href = "confirmation.html";
});

review.addEventListener('click', function () {
	getInfo();
});

function edit() {
	document.getElementById("confInfo").style.display = "none";
	document.getElementById("custInfo").style.display = "block";
}

(function getData() {
	//Retrive
	document.getElementById('result').innerHTML = localStorage.getItem("desc");
	// console.log(localStorage.getItem("desc"));
	document.getElementById('ord_img').setAttribute('src', localStorage.getItem("img"));
	document.getElementById('price_s').innerHTML = localStorage.getItem("pric");
	console.log(localStorage.getItem("pric"));
})();

function hideShow() {
	document.getElementById("custInfo").style.display = "none";
	document.getElementById("confInfo").style.display = "block";
}

function getInfo() {
	if (typeof (Storage) !== "undefined") {
		// Store
		localStorage.setItem("firstName", document.getElementById('fName').value);
		localStorage.setItem("lastName", document.getElementById('lName').value);
		localStorage.setItem("creditCard", document.getElementById('crCard').value);
		localStorage.setItem("shipAddress", document.getElementById('shipAdd').value);
		localStorage.setItem("emailId", document.getElementById('email').value);

		//Retrive
		document.getElementById("getFName").innerHTML = localStorage.getItem("firstName");
		document.getElementById("getLName").innerHTML = localStorage.getItem("lastName");
		document.getElementById("getCrCard").innerHTML = localStorage.getItem("creditCard");
		document.getElementById("getShipAdd").innerHTML = localStorage.getItem("shipAddress");
		document.getElementById("getEmail").innerHTML = localStorage.getItem("emailId");
	}
	hideShow();
}




