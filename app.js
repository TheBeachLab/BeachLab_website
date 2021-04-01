const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const section = document.querySelector('section');
const endtext = section.querySelector('h1');

// scrollmagic
//
// 
const controller = new ScrollMagic.Controller({addIndicators: true});
const scene = new ScrollMagic.Scene({
	duration: 500,
	triggerElement: intro,
	triggerHook: 0
});

scene.setPin(intro);
scene.addTo(controller);

// video
//
let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
	scrollpos = e.scrollPos / 200;
	//console.log(scrollpos);
});

setInterval(() => {
	delay += (scrollpos - delay) * accelamount;
	video.currentTime = delay;
}, 400.0);





