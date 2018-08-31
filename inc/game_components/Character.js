"use strict";

class Character extends GameObject {
	constructor(pos, dim, color) {
		super(pos);
		this.dim = dim;
		this.color = color;
	}

	draw() {
		noStroke();
		fill(this.color);
		rect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
	}
}
