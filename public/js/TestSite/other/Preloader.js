// * preloader stuff
setTimeout(() => {
	function percentIncrease(timeB4Open) {
		var percent = 0;
		var loaderElement = document.querySelector('.loaderPercentage');
		var loaderBar = document.querySelector('.loaderBar');

		function updatePercent() {
			percent += 1;
			loaderElement.textContent = percent + '%';
			loaderBar.setAttribute('style', '--loaderBarWidth: ' + percent + '%');

			if (loaderElement.textContent == '100%') {
				revealPage();
			}
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
		// console.log("Preloader has now completed animating...");
	};

	percentIncrease(4.5);
}, 500);