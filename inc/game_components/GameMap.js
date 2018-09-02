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
			this.pos.x = canvas.width/2 - (player.pos.x + player.dim.x/2);
			this.pos.y = canvas.width/2 - (player.pos.y + player.dim.y/2);
		}
	}
}
