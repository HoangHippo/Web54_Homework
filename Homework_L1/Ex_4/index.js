let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";


	let btn = document.createElement("button");
    btn.className = 'btn btn-danger'
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function done(eventClick){
	eventClick.classList.toggle("done");
}

function deleteItem(eventClick){
	ul.removeChild(eventClick.parentNode);
}

function doneAndDeleteClick(){
	let eventClick = event.target;
	if(eventClick.tagName === "LI"){
		done(eventClick);
	}
	else if(eventClick.tagName === "BUTTON"){
		deleteItem(eventClick);
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", doneAndDeleteClick);