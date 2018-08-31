"use strict";

let canvas;
let controllingLoopTimeout;

window.onload = init;

function init() {
	initCanvas();
	setup();
	startLooping();
}

function initCanvas() {
	canvas = document.querySelector("#gameCanvas");
	setTargetContext(canvas.getContext("2d"));

	if(window.innerHeight < window.innerWidth) {
		canvas.height = Math.floor(7*window.innerHeight/8);
		canvas.width = canvas.height*1.618;
	} else {
		canvas.width = Math.floor(7*window.innerWidth/8);
		canvas.height = canvas.width/1.618;
	}
}

function controllingLoop() {
	let deltaTime = 0;
	let startTime;
	let endTime;
	
	startTime = new Date();
	
	loop();

	endTime = new Date();
	deltaTime = endTime - startTime;
	numberOfFrames++;

	controllingLoopTimeout = setTimeout(controllingLoop, 1000/wantedFPS - deltaTime/1000);
}

function startLooping() {
	clearTimeout(controllingLoopTimeout);
	controllingLoop();
}

function stopLooping() {
	clearTimeout(controllingLoopTimeout);
}
