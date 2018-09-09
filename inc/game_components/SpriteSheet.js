"use strict"

class SpriteSheet {
	constructor(img, spritesDim, borderSize=0) {
		if(!(spritesDim instanceof Vector))
			return error("spriteScales isn't an instance of Vector", new SpriteSheet(img, new Vector(16, 16), borderSize));
		this.img = img;
		this.spritesDim = spritesDim;
		this.borderSize = borderSize;
	}
}
