// Your code goes in here

document.querySelector("#apptitle").innerText = "Tip Calculator";

//tip calsulation function
function calculateTip() {
	const inputPrice = parseInt(document.getElementById('price').value);
	const numberOfPeople = parseInt(document.getElementById('people').value);
	const selectService = document.getElementById('service').value;
	//a statement that checks number is valid, greater than 0 and if the service is selected 
	if ((isNaN(inputPrice)) || (isNaN(numberOfPeople)) || (selectService == "")
		|| (inputPrice < 0) || (numberOfPeople < 0)) {
		errorMessage(); // calls error function
	} else { //if all inputs valid it calls the function that calculates the tip amount
		amountTip();
	}
	function amountTip() {
		const app = document.querySelector('.tip-calc');
		const totalAmount = document.querySelector('.tip-calc p');
		if (numberOfPeople === 1) {
			const tip = (inputPrice * (selectService / 100)).toFixed(2); //calculates tip amount
			totalAmount.innerText = 'TIP AMOUNT' + '\n' + '$ ' + tip;
		}
		else {
			const tip = (inputPrice * ((selectService / 100)) / numberOfPeople).toFixed(2);
			totalAmount.innerText = 'TIP AMOUNT' + '\n' + '$ ' + tip + '\n' + 'each';
		}
	}
}

function errorMessage() {
	const errorContainer = document.querySelector('.error-container');
	const error = document.getElementById('error');
	const errorTitle = document.getElementById('error-title');
	errorContainer.style.display = "block";
	error.classList.add('error-content');
	errorTitle.classList.add('error-title');
	const errorButton = document.getElementById('error-btn');
	errorButton.addEventListener('click', removerErrorMessage); // eventlistener to remove error message
	//function to remove error message
	function removerErrorMessage() {
		errorContainer.style.display = "none";
	}
}
const calcButton = document.getElementById('button-calculate');
calcButton.addEventListener('click', calculateTip);

//Make the app draggable anywhere in de browser
dragElement(document.getElementById("app"));

function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	// mouse down on the apptitle to drag the app
	document.getElementById("apptitle").onmousedown = dragMouseDown;
	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();// get the mouse cursor position at startup
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement; // call a function whenever the cursor moves
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault(); // calculate the new cursor position
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;  // set the element's new position
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	/* function to stop moving the app when mouse button is released:*/
	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}
