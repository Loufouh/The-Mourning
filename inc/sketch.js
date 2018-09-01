"use strict";

let player;
let map;
let otherChars = new Array(50).fill();

function setup() {
	player = new Player(new Vector(canvas.width/2 - 25, canvas.height/2 - 25),
			    new Vector(150, 150),
			    new Color(100, 100, 255));
	map = new GameMap(new Vector(2000, 2000), new Color(52, 100, 52));

	for(let i in otherChars) {
		otherChars[i] = new Character(new Vector(randomInt(0, map.dim.x - 25), randomInt(0, map.dim.y - 25)), 
					      new Vector(25, 25), 
					      new Color(255, 255, 100));
	}
}

function loop() {
	background(52);

	map.draw();
	player.update();
	drawCharacters();
}

function drawCharacters() {
	for(let i in otherChars)
		otherChars[i].draw();
	player.draw();
}
