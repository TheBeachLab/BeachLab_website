function presionada(event) {
	if (event.keyCode == 68) { //d
		image = document.getElementById('logo');
		image.src = 'img/wd.svg';
	}
}

function soltada(event) {
	if (event.keyCode == 68) { //d
		image = document.getElementById('logo');
		image.src = 'img/bl.svg';
	}
}

document.onkeydown = presionada;
document.onkeyup = soltada;
