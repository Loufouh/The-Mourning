"use strict";

let canvas;

window.onload = init;

function init() {
	initCanvas();
	background(52);
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
