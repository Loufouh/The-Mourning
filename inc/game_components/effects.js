"use strict";

let isNight = false;

function setScene1() {
	isNight = true;
	setTimeout(()=>canvas.classList.remove("hidden"), 3000);
	setTimeout(enableThumb, 9000);
	body.classList.add("night");

	map.dim = new Vector(2000, 2000);

	for(let i = 0; i < 125; i++) {
		map.addContent( new GameObject(new Vector(randomInt(0, map.dim.x - 25), randomInt(0, map.dim.y - 25)), 
					       new Vector(25, 25), 
					       new Color(255, 255, 100)) );
	}

}

function drawFilter() {
	if(isNight)
		background(new Color(0, 0, 100, 0.6));
}

function enableThumb() {
	toogleThumb();
	setTimeout(enableThumb, randomInt(4000, 20000));
}

function toogleThumb() {
	let body = document.querySelector("body");

	body.classList.add("thumb");

	if(random(0, 50) < 20)
		canvas.classList.add("thumb");
	thunderAudio.currentTime = 0;
	thunderAudio.play();

	setTimeout(()=>thunderAudio.pause(), 3980);
	setTimeout(()=> {
		body.classList.remove("thumb");
		canvas.classList.remove("thumb");	
	}, 3500);
}
