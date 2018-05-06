(function getConfirmData() {

	document.getElementById('ord_img').setAttribute('src', localStorage.getItem("img"));

	//Retrive
	document.getElementById("getFName").innerHTML = localStorage.getItem("firstName");
	document.getElementById("getLName").innerHTML = localStorage.getItem("lastName");
	document.getElementById("getShipAdd").innerHTML = localStorage.getItem("shipAddress");
	document.getElementById("getEmail").innerHTML = localStorage.getItem("emailId");

})();

var goToHome = document.getElementById("goToHome");

goToHome.addEventListener('click', function () {
	location.href = "index.html";
});
