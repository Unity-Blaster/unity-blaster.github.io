// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
// {
//     var url = "http://unity-blaster.github.io/m/";
//     $(location).attr('href',url);

// }

var winX = window.innerHeight * 2;

function nextPage() {
	window.scrollTo({
	top: winX,
	behavior: "smooth",
	});
}

window.addEventListener("load", () => {
	pageLoad();
});