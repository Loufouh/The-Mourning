"use strict";

let scene;
let isNight = false;

function setScene1() {
	scene = 1;
	isNight = true;
	setTimeout(()=>canvas.classList.remove("hidden"), 3000);
	setTimeout(enableThumb, 9000);
	body.classList.add("night");

	map.dim = new Vector(700, 2000);
	player.pos = new Vector(-200, 0);

	map.addContent(new GameObject(new Vector(218, 50), new Vector(262, 1700), new Color(255, 51, 153, 0.3)));

	for(let i = 0; i < 25; i++) {
		let color = (random(0, 100) < 30)? new Color(255, 100, 100) : new Color(255, 255, 100);
		map.addContent(new GameObject(new Vector(randomInt(0, map.dim.x - 25), randomInt(0, map.dim.y - 25)), 
					      new Vector(5, 5), color));
	
	}
}

function setScene2() {
	scene = 2;
	isNight = true;
	setTimeout(()=>canvas.classList.remove("hidden"), 3000);
	
	player.pos = new Vector(0, 0);
	map.dim = new Vector(2000, 700);

	map.content = [];

	map.addContent(new GameObject(new Vector(50, 218), new Vector(1700, 262), new Color(255, 102, 0, 0.3)));

	for(let i = 0; i < 25; i++) {
		let color = (random(0, 100) < 30)? new Color(255, 100, 100) : new Color(255, 255, 100);
		map.addContent(new GameObject(new Vector(randomInt(0, map.dim.x - 25), randomInt(0, map.dim.y - 25)), 
					      new Vector(5, 5), color));
	
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
