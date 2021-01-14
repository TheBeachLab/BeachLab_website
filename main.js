// spoiler
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

//document.onkeydown = presionada;
//document.onkeyup = soltada;

// reveal the magic
var vald = 0;
var vali = 0;
var vals = 0;
var valn = 0;
var vale = 0;
var valy = 0;
var magic_sound = new Audio('files/drum.mp3');
var magic_color = 'orange';
var tron_audio = new Audio('files/tron.mp3');
tron_audio.loop = true;
tron_audio.addEventListener('timeupdate', function () {
	var buffer = .1
	if (this.currentTime > this.duration - buffer) {
		this.currentTime = 0
		this.play()
	}
});



var letterd = document.getElementById('letterd');
letterd.addEventListener('click', e => {
	tapletter(letterd);
});
var letterd2 = document.getElementById('letterd2');
letterd2.addEventListener('click', e => {
	tapletter(letterd);
});
var letteri = document.getElementById('letteri');
letteri.addEventListener('click', e => {
	tapletter(letteri);
});
var letteri2 = document.getElementById('letteri2');
letteri2.addEventListener('click', e => {
	tapletter(letteri);
});
var letters = document.getElementById('letters');
letters.addEventListener('click', e => {
	tapletter(letters);
});
var letters2 = document.getElementById('letters2');
letters2.addEventListener('click', e => {
	tapletter(letters);
});
var lettern = document.getElementById('lettern');
lettern.addEventListener('click', e => {
	tapletter(lettern);
});
document.querySelectorAll('.lettern2').forEach(item => {
	item.addEventListener('click', e => {
		tapletter(lettern);
	});
});
var lettere = document.getElementById('lettere');
lettere.addEventListener('click', e => {
	tapletter(lettere);
});
document.querySelectorAll('.lettere2').forEach(item => {
	item.addEventListener('click', e => {
		tapletter(lettere);
	});
});
var lettery = document.getElementById('lettery');
lettery.addEventListener('click', e => {
	tapletter(lettery);
});
var lettery2 = document.getElementById('lettery2');
lettery2.addEventListener('click', e => {
	tapletter(lettery);
});

function tapletter(letter) { // This code is probably awful, I know. But it works
	// reveal a letter
	if (letter == letterd) {
		if (vald == 0) {
			vald = 1;
			magic_sound.pause();
			magic_sound.currentTime = 0;
			magic_sound.play();
			letter.style.color = magic_color;
		}
	};
	if (letter == letteri) {
		if (vali == 0) {
			vali = 1;
			magic_sound.pause();
			magic_sound.currentTime = 0;
			magic_sound.play();
			letter.style.color = magic_color;
		}
	};
	if (letter == letters) {
		if (vals == 0) {
			vals = 1;
			magic_sound.pause();
			magic_sound.currentTime = 0;
			magic_sound.play();
			letter.style.color = magic_color;
		}
	};
	if (letter == lettern) {
		if (valn == 0) {
			valn = 1;
			magic_sound.pause();
			magic_sound.currentTime = 0;
			magic_sound.play();
			letter.style.color = magic_color;
		}
	};
	if (letter == lettere) {
		if (vale == 0) {
			vale = 1;
			magic_sound.pause();
			magic_sound.currentTime = 0;
			magic_sound.play();
			letter.style.color = magic_color;
		}
	};
	if (letter == lettery) {
		if (valy == 0) {
			valy = 1;
			magic_sound.pause();
			magic_sound.currentTime = 0;
			magic_sound.play();
			letter.style.color = magic_color;
		}
	};
	// do we reveal?
	sum = vald + vali + vals + valn + vale + valy
	if (sum == 6) { // reveal the magic
		image = document.getElementById('logo');
		image.src = 'img/wd.svg';
		tron_audio.play();
		var maintxt = document.getElementsById('title2');
		maintxt.style.color = 'cyan';
	}
};