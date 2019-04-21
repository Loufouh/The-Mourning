"use strict";

class GameMap extends GameObject {
	constructor(dim, color) {
		super(new Vector(0, 0), dim, color)
	}

	draw() {
		this.updatePos();

		stroke(new Color(100, 100, 255));
		strokeWeight(4);
		fill(this.color);
		
		rect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);

		this.drawContent();
	}

	updatePos() {
		if(player !== undefined) {
			let center = new Vector(canvas.width/2, canvas.height/2);
			let absPlayerPos = Vector.substract(center, Vector.multiply(player.dim, 1/2));
			this.pos = Vector.substract(absPlayerPos, player.pos);
		}
	}
}
