// * preloader stuff
// setTimeout(() => {
function pageLoad() {
	function percentIncrease(timeB4Open) {
		var percent = 0;
		var loaderElement = document.querySelector('.loaderPercentage');
		var loaderBar = document.querySelector('.loaderBar');

		function updatePercent() {
			percent += 1;
			loaderElement.textContent = percent + '%';
			loaderBar.setAttribute('style', '--loaderBarWidth: ' + percent + '%');

			if (loaderElement.textContent == '100%') {
				setTimeout(() => {
					revealPage();
					document.querySelector('.svg-preloader').setAttribute('style', 'animation: fill-out 500ms linear forwards');
					document.querySelector('.loaderBarWrap').setAttribute('style', 'animation: fill-out 500ms linear forwards');
					document.querySelector('.loaderPercentage').setAttribute('style', 'animation: fill-out 500ms linear forwards');
				}, 1000);
			};
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

	const items = document.querySelectorAll('.svg-preloader text');
	const itemWraps = document.querySelectorAll('.loader-section');
	function svgLogoFin() {

		items.forEach(item => {
			item.setAttribute('style', 'animation: animate-stroke-finished 2s linear forwards');
		});
		itemWraps.forEach(itemWrap => {
			itemWrap.setAttribute('style', 'animation: body-fill-finished 2s linear forwards');
		});

		// setTimeout(() => {
			document.querySelector('.loaderBarWrap').setAttribute('style', 'animation: fill-in 2s linear forwards')
			document.querySelector('.loaderPercentage').setAttribute('style', 'animation: fill-in 2s linear forwards')
			percentIncrease(2);
		// }, 2000);
	};
	svgLogoFin()
}
// }, 11000);
// preloader end