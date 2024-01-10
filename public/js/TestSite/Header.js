// * preloader stuff

function percentIncrease(timeB4Open) {
	var percent = 0;
	var loaderElement = document.querySelector('.loaderPercentage');

	function updatePercent() {
		percent += 5;
		loaderElement.textContent = percent + '%';
	};

	var interval = setInterval(function() {
		if (percent >= 100) {
			clearInterval(interval);
		} else {
			updatePercent();
		}
	}, (timeB4Open * 1000) / 20); // Divide by 20 because 100% / 5% increments = 20 updates
};

setTimeout(() => {
	function revealPage() {
		document.body.classList.add("loaded");
	};

	percentIncrease(4.5);

	setTimeout(() => {
		revealPage();
	}, 5000);
}, 1000);

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
		}
		document.getElementById("Hii").innerText = "Hi";
		document.getElementById("dName").innerText = nName;
	};

	function GoToHome() {
		window.location.replace("/TestSite/Home/");
	}

	function GoToLanding() {
		window.location.replace("/TestSite/");
	}

	Welcome0();

	document.addEventListener('keypress', function(event) {
		if (event.key === 'a') {
			console.log("The 'a' key was pressed");
			Welcome();
		} else if (event.key === 'Escape') {
			console.log("The 'esc' key was pressed");
			menuSlide();
		};
	});
}, 1000);

// * Sidebar stuff

setTimeout(() => {
	var menuStatus = 0;
	function menuSlide() {
		const sidebar = document.querySelector('.sidebar');
		if (sidebar) {
			if (menuStatus == 0) {
				sidebar.style.transform = `translateX(-100%) translateY(0)`;
				// sidebar.style.zIndex = '999';
				menuStatus = 1;
			} else if (menuStatus == 1){
				sidebar.style.transform = `translateX(100%) translateY(0)`;
				// sidebar.style.zIndex = '1';
				menuStatus = 0;
			};
		};
	};
}, 1000);
