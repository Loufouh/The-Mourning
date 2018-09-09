"use strict";

class VisualGameObject extends GameObject {
	constructor(pos, dim, posType=GameObjectPosType.TOP_LEFT_CORNER) {
		super(pos, dim, posType);
		
		this.skin = new SimpleSkin(ShapesType.SQUARE,
					   new Color(0),
					   new Color(0));
	}
}
