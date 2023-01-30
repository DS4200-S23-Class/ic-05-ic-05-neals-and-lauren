
// JS File for class demo 
// Ab Mosca 
// Last moditifed: 01.30.2023 

let clicks = 0;
function buttonClicked() {
	console.log("button was clicked");
	clicks += 1;

	let newText = "Number of times button clicked: " + clicks;

	// select the element that you want to modify
	let buttonDiv = document.getElementById("button-div");
	buttonDiv.innerHTML = newText;

}













