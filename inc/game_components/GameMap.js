"use strict";

class GameMap {
	constructor(dim, color) {
		this.pos = new Vector(0, 0);
		this.dim = dim;
		this.color = color;
	}

	draw() {
		this.updatePos();
		stroke(new Color(255, 100, 100));
		fill(this.color);
		rect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
	}

	updatePos() {
		if(player !== undefined) {
			this.pos.x = canvas.width/2 - player.pos.x;
			this.pos.y = canvas.width/2 - player.pos.y;
		}
	}
}
