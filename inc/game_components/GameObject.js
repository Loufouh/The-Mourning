"use strict";

class GameObject {
	constructor(pos, dim, color) {
		this.pos = pos;
		this.dim = dim;
		this.color = color;
	}

	draw() {
		let absPos = this.getAbsolutePos();

		if(absPos.x + this.dim.x > 0 && absPos.y + this.dim.y > 0 && absPos.x < canvas.width && absPos.y < canvas.height) {
			fill(this.color);
	
			if(map !== undefined)
				rect(map.pos.x + this.pos.x, map.pos.y + this.pos.y, this.dim.x, this.dim.y);
		}
	}

	getAbsolutePos() {
		if(map !== undefined)
			return new Vector(map.pos.x + this.pos.x, map.pos.y + this.pos.y);
	}
}
