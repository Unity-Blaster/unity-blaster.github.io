
// * Bg Grid stuff

setTimeout(() => {
	const wrapper = document.getElementById("tiles");
	const gridParent = document.getElementById("gridParent");

	let columns = 0,
		rows = 0,
		toggled = false;

	const toggle = () => {
		toggled = !toggled;
		
	gridParent.classList.toggle("toggled");
	}

	const handleOnClick = index => {
		toggle();
		
		anime({
			targets: ".tile",
			opacity: toggled ? 0 : 1,
			delay: anime.stagger(50, {
				grid: [columns, rows],
				from: index
			})
		});
	}

	const createTile = index => {
		const tile = document.createElement("div");
		tile.classList.add("tile");
		tile.style.opacity = toggled ? 0 : 1;
		tile.onclick = e => handleOnClick(index);
		return tile;
	}

	const createTiles = quantity => {
		Array.from(Array(quantity)).map((tile, index) => {
			wrapper.appendChild(createTile(index));
		});
	}

	const createGrid = () => {
		wrapper.innerHTML = "";
		
		const size = gridParent.clientWidth > 800 ? 50 : 25;
		
		columns = Math.floor(gridParent.clientWidth / size);
		rows = Math.floor(gridParent.clientHeight / size);
		
		wrapper.style.setProperty("--columns", columns);
		wrapper.style.setProperty("--rows", rows);
		
		createTiles(columns * rows);
	}

	createGrid();
	window.onresize = () => createGrid();

// Wrap every letter in a span
	var textWrapper = document.querySelector('.dummy-a .txt-letters-a');
	textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='txt-letters-a'>$&</span>");
	
	anime.timeline({loop: true})
	.add({
		targets: '.txt-line-a',
		scaleY: [0,1],
		opacity: [0.5,1],
		easing: "easeOutExpo",
		duration: 700
	}).add({
		targets: '.txt-line-a',
		translateX: [0, document.querySelector('.txt-letters-a').getBoundingClientRect().width + 10],
		easing: "easeOutExpo",
		duration: 700,
		delay: 100
	}).add({
		targets: '.txt-letters-a',
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 600,
		offset: '-=775',
		delay: (el, i) => 34 * (i+1)
	}).add({
		targets: '.txt-line-a',
		scaleY: [1,0],
		opacity: [1,0],
		easing: "easeOutExpo",
		duration: 600,
		delay: 100
	}).add({
		targets: '.dummy-a',
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1500
	});

	var textWrapperB = document.querySelector('.dummy-b .txt-letters-b');
	textWrapperB.innerHTML = textWrapperB.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='txt-letters-b'>$&</span>");
	
	anime.timeline({loop: true})
	.add({
		targets: '.txt-line-b',
		scaleY: [0,1],
		opacity: [0.5,1],
		easing: "easeOutExpo",
		duration: 700
	}).add({
		targets: '.txt-line-b',
		translateX: [0, document.querySelector('.txt-letters-b').getBoundingClientRect().width + 10],
		easing: "easeOutExpo",
		duration: 700,
		delay: 100
	}).add({
		targets: '.txt-letters-b',
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 600,
		offset: '-=775',
		delay: (el, i) => 34 * (i+1)
	}).add({
		targets: '.txt-line-b',
		scaleY: [1,0],
		opacity: [1,0],
		easing: "easeOutExpo",
		duration: 600,
		delay: 100
	}).add({
		targets: '.dummy-b',
		opacity: 0,
		duration: 1000,
		easing: "easeOutExpo",
		delay: 1500
	});
}, 1000);