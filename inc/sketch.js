"use strict";

let player;
let map;

let body;
let metallicMonksAudio;
let thunderAudio;

let isNight = true;

function setup() {
	body = document.querySelector("body");
	metallicMonksAudio = document.querySelector("#metallicMonksAudio");
	thunderAudio = document.querySelector("#thunderAudio");

	player = new Player(new Vector(canvas.width/2 - 25, canvas.height/2 - 25),
			    new Vector(150, 150));
	map = new GameMap(new Vector(2000, 2000), new Color(52, 100, 52));

	for(let i = 0; i < 125; i++) {
		map.addContent( new GameObject(new Vector(randomInt(0, map.dim.x - 25), randomInt(0, map.dim.y - 25)), 
					       			   new Vector(25, 25), 
									   new Color(255, 255, 100)) );
	}
	setTimeout(enableThumb, randomInt(1000, 10000));
	body.classList.add("night");
	metallicMonksAudio.play();
}

function loop() {
	player.update();

	background(52);

	map.draw();
	player.draw();

	if(isNight)
		background(new Color(0, 0, 100, 0.5))
}

function enableThumb() {
	toogleThumb();
	setTimeout(enableThumb, randomInt(4000, 10000));
}

function toogleThumb() {
	let body = document.querySelector("body");

	body.classList.add("thumb");

	if(random(0, 50) < 20)
		canvas.classList.add("thumb");
	thunderAudio.play();

	setTimeout(()=>thunderAudio.pause(), 3980);
	setTimeout(()=> {
		body.classList.remove("thumb");
		canvas.classList.remove("thumb");	
	}, 5000);
}
