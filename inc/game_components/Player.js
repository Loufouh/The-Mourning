"use strict";

const player_states = {
	IDLE_UP: "0",
	IDLE_DOWN: "1",
	IDLE_RIGHT: "2",
	IDLE_LEFT: "3",
	WALK_UP: "4",
	WALK_DOWN: "5",
	WALK_RIGHT: "6",
	WALK_LEFT: "7"
}

class Player extends Character {
	constructor(pos, dim, color, state=player_states.IDLE_DOWN) {
		super(pos, dim, color);
		this.state = state; 
	}

	update() {
		if(keys_state.UP && !keys_state.DOWN)
			this.state = player_states.WALK_UP;
		else if(keys_state.DOWN && !keys_state.UP)
			this.state = player_states.WALK_DOWN;
		else if(keys_state.RIGHT && !keys_state.LEFT)
			this.state = player_states.WALK_RIGHT;
		else if(keys_state.LEFT && !keys_state.RIGHT)
			this.state = player_states.WALK_LEFT;
		else if(this.state === player_states.IDLE_UP || this.state === player_states.WALK_UP)
			this.state = player_states.IDLE_UP;
		else if(this.state === player_states.IDLE_DOWN || this.state === player_states.WALK_DOWN)
			this.state = player_states.IDLE_DOWN;
		else if(this.state === player_states.IDLE_RIGHT || this.state === player_states.WALK_RIGHT)
			this.state = player_states.IDLE_RIGHT;
		else if(this.state === player_states.IDLE_LEFT || this.state === player_states.WALK_LEFT)
			this.state = player_states.IDLE_LEFT;
	}

	draw() {
		noStroke();
		fill(this.color);
		rect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
		
		switch(this.state) {
			case player_states.IDLE_UP:
				strokeWeight(3);
				stroke(new Color(100, 255, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2, 0);
				break;
			case player_states.IDLE_DOWN:
				strokeWeight(3);
				stroke(new Color(100, 255, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2, canvas.height);
				break;
			case player_states.IDLE_LEFT:
				strokeWeight(3);
				stroke(new Color(100, 255, 100));
				line(canvas.width/2, canvas.height/2, 0, canvas.height/2);
				break;
			case player_states.IDLE_RIGHT:
				strokeWeight(3);
				stroke(new Color(100, 255, 100));
				line(canvas.width/2, canvas.height/2, canvas.width, canvas.height/2);
				break;
			case player_states.WALK_UP:
				strokeWeight(3);
				stroke(new Color(255, 100, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2, 0);
				break;
			case player_states.WALK_DOWN:
				strokeWeight(3);
				stroke(new Color(255, 100, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2, canvas.height);
				break;
			case player_states.WALK_LEFT:
				strokeWeight(3);
				stroke(new Color(255, 100, 100));
				line(canvas.width/2, canvas.height/2, 0, canvas.height/2);
				break;
			case player_states.WALK_RIGHT:
				strokeWeight(3);
				stroke(new Color(255, 100, 100));
				line(canvas.width/2, canvas.height/2, canvas.width, canvas.height/2);


		}
	}
}
