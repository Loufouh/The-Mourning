"use strict";

class GameObject {
	constructor(pos, dim, posType=GameObjectPosType.TOP_LEFT_CORNER) {
		this.dim = dim;

		this.setPos(pos, posType);
	}

	setPos(pos, posType=GameObjectPosType.TOP_LEFT_CORNER) {
		// Error handling
		if(!(pos instanceof Vector))
			return error("pos isn't an instance of Vector !");
		if(this.dim === undefined)
			return error("this.dim is undefined !");

		if(posType === GameObjectPosType.TOP_LEFT_CORNER)
			this.pos = Vector.add(pos, Vector.divide(this.dim, 2));
		else if(posType === GameObjectPosType.CENTER)
			this.pos = pos;
		else
			return error("posType is not a value from GameObjectPosType !");
	}
}
