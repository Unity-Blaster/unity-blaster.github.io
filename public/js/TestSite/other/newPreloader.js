setTimeout(() => {
	function percentIncrease(loadingTime) {
		let percent = 0;

		function updatePercent() {
		percent++;
		loaderPercentage.textContent = percent + '%';
		loaderBar.setAttribute('style', '--loaderBarWidth: ' + percent + '%');

			if (loaderPercentage.textContent == '100%') {
				revealPage();
				itemWraps.forEach(itemWrap => {
					itemWrap.setAttribute('style', 'animation: body-animate-fill-finished 500ms linear forwards');
				});
				setTimeout(() => {
					loader.setAttribute('style', 'animation: fill-out 500ms linear forwards');
					loaderBarWrap.setAttribute('style', 'animation: fill-out 500ms linear forwards');
					loaderPercentage.setAttribute('style', 'animation: fill-out 500ms linear forwards');
				}, 500);
			}
		}

		const interval = setInterval(function() {
		if (percent >= 100) {
			clearInterval(interval);
		} else {
			updatePercent();
		}
		}, loadingTime * 10);
	}

	function revealPage() {
		document.body.classList.add("loaded");
		console.log("Preloader has now completed animating...");
	}

	const items = document.querySelectorAll('.svg-path');
	const itemWraps = document.querySelectorAll('.loader-section');
	const loaderBar = document.querySelector('.loaderBar');
	const loaderBarWrap = document.querySelector('.loaderBarWrap');
	const loaderPercentage = document.querySelector('.loaderPercentage');
	const loader = document.querySelector('.svg-preloader');
	const loaderWrap = document.querySelector('.loader-preloader');

	items.forEach(item => {
		item.setAttribute('style', 'animation: animate-stroke-finished 2s linear forwards');
	});

	itemWraps.forEach(itemWrap => {
		itemWrap.setAttribute('style', 'animation: body-fill-finished 2s linear forwards');
	});

	loaderBarWrap.setAttribute('style', 'animation: fill-in 2s linear forwards');
	loaderPercentage.setAttribute('style', 'animation: fill-in 2s linear forwards');
	percentIncrease(2); // Loading time in seconds
}, 4000);