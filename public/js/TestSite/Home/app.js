
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
}, 1000);