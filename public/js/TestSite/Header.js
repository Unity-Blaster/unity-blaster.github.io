// * Username stuff

setTimeout(() => {
	function Welcome0() {
		// Get stored username, if any
		var storedName = localStorage.getItem("username");

		// If stored name exists, use it
		if (storedName) {
			document.getElementById("Hii").innerHTML = "Welcome back,";
			document.getElementById("dName").innerHTML = storedName;
		};
	};

	function Welcome() {
		window.alert("Hello & Welcome!");

		// Prompt for and store username (initial)
		var nName = prompt("What's Your Name?");
		if (!nName.trim().length) {
			localStorage.removeItem("username");
			nName = "User";
		} else {
			localStorage.setItem("username", nName);
		};
		document.getElementById("Hii").innerText = "Hi";
		document.getElementById("dName").innerText = nName;
	};

	Welcome0();

	var usernameBtn = document.querySelector('.usernameBtn');
	usernameBtn.addEventListener('click', Welcome);

	document.addEventListener('keypress', function(event) {
		if (event.key === 'a') {
			console.log("The 'a' key was pressed");
			Welcome();
		};
	});
}, 1000);

// * Sidebar stuff

setTimeout(() => {
	var menuStatus = 0;
	var hamburg = document.querySelector('.hamBurger');
	var hamburgMenu = document.querySelector('.hamburger-menu');
	var hamInput = document.querySelector('.hamInput');
	function menuSlide() {
		const sidebar = document.querySelector('.sidebar');
		if (sidebar) {
			if (menuStatus == 0) {
				sidebar.style.transform = `translateX(-100%) translateY(0)`;
				menuStatus = 1;
			} else if (menuStatus == 1){
				sidebar.style.transform = `translateX(100%) translateY(0)`;
				menuStatus = 0;
			};
		};
	};
	hamburg.addEventListener('click', menuSlide);
	hamburgMenu.addEventListener('click', menuSlide);
	hamInput.addEventListener('click', menuSlide);

	document.addEventListener('keypress', function(event) {
		if (event.key === 'b') {
			console.log("The 'b' key was pressed");
			menuSlide();
		};
	});
}, 1000);