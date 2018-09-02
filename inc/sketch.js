"use strict";

let player;
let map;

let sonateAudio;
let thunderAudio;


function setup() {
	sonateAudio = document.querySelector("#sonateAudio");
	thunderAudio = document.querySelector("#thunderAudio");

	player = new Player(new Vector(canvas.width/2 - 25, canvas.height/2 - 25),
			    new Vector(150, 150));
	map = new GameMap(new Vector(), new Color(52, 100, 52));

	sonateAudio.play();
	alert("Il est conseillé de jouer en plein écran, avec des écouteurs.");
	setScene1();
}

function loop() {
	player.update();

	background(52);

	map.draw();
	player.draw();

	drawFilter();
}


