"use strict";

let player;
let otherChars = new Array(1);

function setup() {
	player = new Character(new Vector(canvas.width/2 - 10, canvas.height/3 - 10), new Vector(20, 20), new Color(100, 100, 255));

	for(let i in otherChars)
		otherChars[i] = new Character(new Vector(random(0, canvas.width), random(0, canvas.height)), new Vector(10, 10), new Color(255, 255, 100));
}

function loop() {
	background(52);
	drawChars();
}

function drawChars() {
	for(let i in otherChars)
		otherChars[i].draw();
	player.draw();
}

