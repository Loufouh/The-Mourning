"use strict";

class GameObject {
	constructor(pos) {
		if(!(pos instanceof Vector))
			return error("La position entrée n'est pas un vecteur", new Character(new Vector(0, 0), dim, color));
		this.pos = pos;
	}
}
