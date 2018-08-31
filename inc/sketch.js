"use strict";

let player;
let otherChars = new Array(5).fill();

function setup() {
	player = new Character(new Vector(canvas.width/2 - 25, canvas.height/2 - 25),
						   new Vector(50, 50), 
						   new Color(100, 100, 255));

	for(let i in otherChars) {
		otherChars[i] = new Character(new Vector(randomInt(0, canvas.width - 25), randomInt(0, canvas.height - 25)), 
									  new Vector(25, 25), 
									  new Color(255, 255, 100));
	}
}

function loop() {
	background(52);
	drawCharacters();
}

function drawCharacters() {
	for(let i in otherChars)
		otherChars[i].draw();
	player.draw();
}
