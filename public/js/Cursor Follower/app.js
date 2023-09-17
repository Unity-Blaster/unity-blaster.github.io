document.onmousemove = mouseCoordinates;
// document.onmouseleave = mouseExit;

function mouseCoordinates(event){
	follow1 = document.getElementById("follow1");
	follow2 = document.getElementById("follow2");

	var xPos= event.clientX;
	var yPos= event.clientY;
	
	follow1.style.top = parseFloat(yPos) - 25 + "px";
	follow2.style.left = parseFloat(xPos) - 25 + "px";
	follow1.style.opacity = "1";
	follow2.style.opacity = "1";

	// console.log(follow1.style.top);
	// console.log(follow2.style.left);
	follow1.innerHTML = yPos + "px";
	follow2.innerHTML = xPos + "px";
}

function mouseExit(event) {
	follow1 = document.getElementById("follow1");
	follow2 = document.getElementById("follow2");
	follow1.style.opacity = "0";
	follow2.style.opacity = "0";
	follow1.style.transition = "mouseExit 0.5s ease-out";
	follow2.style.transition = "mouseExit 0.5s ease-out";
}
