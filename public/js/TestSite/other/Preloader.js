// * preloader stuff
setTimeout(() => {
	function percentIncrease(timeB4Open) {
		var percent = 0;
		var loaderElement = document.querySelector('.loaderPercentage');

		function updatePercent() {
			percent += 1;
			loaderElement.textContent = percent + '%';
		};

		var interval = setInterval(function() {
			if (percent >= 100) {
				clearInterval(interval);
			} else {
				updatePercent();
			}
		}, (timeB4Open * 1000) / 100); // Divide by 100 because 100% / 1% increments = 100 updates
	};

	function revealPage() {
		document.body.classList.add("loaded");
	};

	percentIncrease(4.5);

	setTimeout(() => {
		revealPage();
	}, 5500);
}, 500);