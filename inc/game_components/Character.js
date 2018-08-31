"use strict";

class Character {
	constructor(pos, dim, color) {
		if(!(pos instanceof Vector))
			return error("La position entrée n'est pas un vecteur", new Character(new Vector(0, 0), dim, color))
		if(!(dim instanceof Vector))
			return error("La dimension entrée n'est pas un vecteur", new Character(pos, new Vector(1, 1), color));
		if(!(color instanceof Color))
			color = new Color(color);

		this.pos = pos;
		this.dim = dim;
		this.color = color;
	}

	draw() {
		noStroke();
		fill(this.color);
		rect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
	}

	toString() {
		console.log("pos : " + this.pos.x + " : " + this.pos.y + "\n"
			    + "dim : " + this.dim.x + " : " + this.dim.y + "\n"
			    + "color : " + this.color.toString());
	}
}
