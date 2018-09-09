"use strict";

class SimpleSkin extends Skin {
	constructor(strokeWeight, strokeColor, fillColor) {
		this.strokeWeight = strokeWeight;
		this.strokeColor = strokeColor;
		this.fillColor = fillColor;
	}

	draw(pos, dim, drawStroke, drawFill) {
		if(drawStroke) {
			strokeWeight(this.strokeWeight);
			stroke(this.strokeColor);
		} else {
			noStroke();
		}

		if(drawFill)
			fill(this.fillColor);
		else
			noFill();

		rect(pos.x, pos.y, dim.x, dim.y);
	}
}
