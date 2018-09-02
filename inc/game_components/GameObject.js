"use strict";

class GameObject {
	constructor(pos, dim, color) {
		this.pos = pos;
		this.dim = dim;
		this.color = color;
		this.content = [];
	}

	draw() {
		let absPos = this.getAbsolutePos();

		if(absPos.x + this.dim.x > 0 && absPos.y + this.dim.y > 0 && absPos.x < canvas.width && absPos.y < canvas.height) {
			noStroke();
			fill(this.color);
	
			if(map !== undefined)
				rect(map.pos.x + this.pos.x, map.pos.y + this.pos.y, this.dim.x, this.dim.y);
			else 
				rect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);

			this.drawContent();
		}
	}

	drawContent() {
		for(let o of this.content) {
			if(o.update !== undefined)
				o.update();
			o.draw();
		}
	}

	getAbsolutePos() {
		if(map !== undefined)
			return new Vector(map.pos.x + this.pos.x, map.pos.y + this.pos.y);
	}

	addContent(gameObject) {
		if(!(gameObject instanceof GameObject))
			return error("gameObject n'est pas une instance de GameObject !");
		this.content.push(gameObject);
	}
}
