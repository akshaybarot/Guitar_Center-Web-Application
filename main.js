var xhttp = new XMLHttpRequest();
var prev = document.getElementById("prev");
var nxt = document.getElementById("nxt");
var myImg = document.getElementById('image');
var buy = document.getElementById("buy");
var idx = 0;

var photos = new Array("./Images/product1.jpg", "./Images/product2.jpg", "./Images/product3.jpg");



prev.addEventListener('click', function () {
	previous();
});
nxt.addEventListener('click', function () {
	next();
});
buy.addEventListener('click', function () {
	saveData(JSON.parse(xhttp.responseText));
		location.href = "orderPurchase.html";

});


function showImage(idx) {
	myImg.setAttribute('src', photos[idx]);
}

function saveData(data) {
	if (typeof (Storage) !== "undefined") {
		// Store
		localStorage.setItem("desc", data.allProducts[idx].product_description);
		localStorage.setItem("img", photos[idx]);
		localStorage.setItem("pric", data.allProducts[idx].price);
	}
}

function next() {
	idx = idx + 1;
	if (idx == photos.length) {
		idx = 0;
	}
	showImage(idx);
	loadDoc();
	console.log(idx);
}

function previous() {
	idx = idx - 1;
	if (idx <= 0) {
		idx = 0;
	}
	console.log(idx);
	showImage(idx);
	loadDoc();
}


function loadDoc() {
	
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(this.responseText);
			console.log(data.allProducts);
			console.log(data.allProducts[0].product_description);

			document.getElementById("description").innerHTML = data.allProducts[idx].product_description;
			document.getElementById("shipInfo").innerHTML = data.allProducts[idx].shipping_details;
			document.getElementById("custReview").innerHTML = data.allProducts[idx].customer_reviews;
			document.getElementById("price").innerHTML = data.allProducts[idx].price;
			myImg.setAttribute('src', photos[idx]);
			saveData(data);
		}
	};
	xhttp.open("GET", "guitardata.json", true);
	xhttp.send();
}
loadDoc();
