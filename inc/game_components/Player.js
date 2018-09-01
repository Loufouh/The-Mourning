"use strict";

const player_states = {
	IDLE_UP: "0",
	IDLE_DOWN: "1",
	IDLE_RIGHT: "2",
	IDLE_LEFT: "3",
	IDLE_UP_LEFT: "4",
	IDLE_UP_RIGHT: "5",
	IDLE_DOWN_LEFT: "6",
	IDLE_DOWN_RIGHT: "7",
	
	WALK_UP: "8",
	WALK_DOWN: "9",
	WALK_RIGHT: "10",
	WALK_LEFT: "11",
	WALK_UP_LEFT: "12",
	WALK_UP_RIGHT: "13",
	WALK_DOWN_LEFT: "14",
	WALK_DOWN_RIGHT: "15"
}

class Player extends Character {
	constructor(pos, dim, color, state=player_states.IDLE_DOWN) {
		super(pos, dim, color);
		this.state = state; 
		this.animation;
		this.initSpriteSheets();
	}

	initSpriteSheets() {
		this.spriteSheets = {
			walkUp : new Image(),
			walkDown: new Image(),
			walkLeft: new Image(),
			walkRight: new Image()
		};

		this.spriteSheets.walkUp.src = "img/characters/player/walk-up/spritesSheet.png";
		this.spriteSheets.walkDown.src = "img/characters/player/walk-down/spritesSheet.png";
		this.spriteSheets.walkLeft.src = "img/characters/player/walk-left/spritesSheet.png";
		this.spriteSheets.walkRight.src = "img/characters/player/walk-right/spritesSheet.png";

	}
	
	update() {
		let oldState = this.state;
		this.determineState();
		
		if(this.state === oldState && this.animation != undefined)
			return;

		this.updateAnimation();
	}

	determineState() {
		if(keys_state.UP && keys_state.LEFT) {
			this.state = player_states.WALK_UP_LEFT;
		} 
		else if(keys_state.UP && keys_state.RIGHT) {
			this.state = player_states.WALK_UP_RIGHT;
		}
		else if(keys_state.DOWN && keys_state.LEFT) {
			this.state = player_states.WALK_DOWN_LEFT;
		}
		else if(keys_state.DOWN && keys_state.RIGHT) {
			this.state = player_states.WALK_DOWN_RIGHT;
		}
		else if(keys_state.UP && !keys_state.DOWN) {
			this.state = player_states.WALK_UP;
		}
		else if(keys_state.DOWN && !keys_state.UP) {
			this.state = player_states.WALK_DOWN;
		}
		else if(keys_state.RIGHT && !keys_state.LEFT) {
			this.state = player_states.WALK_RIGHT;
		}
		else if(keys_state.LEFT && !keys_state.RIGHT) {
			this.state = player_states.WALK_LEFT;
		}
		else if(this.state === player_states.WALK_UP_LEFT) {
			this.state = player_states.IDLE_UP_LEFT;
		}
		else if(this.state === player_states.WALK_UP_RIGHT) {
			this.state = player_states.IDLE_UP_RIGHT;
		}
		else if(this.state === player_states.WALK_DOWN_LEFT) {
			this.state = player_states.IDLE_DOWN_LEFT;
		}
		else if(this.state === player_states.WALK_DOWN_RIGHT) {
			this.state = player_states.IDLE_DOWN_RIGHT;
		}
		else if(this.state === player_states.WALK_UP) {
			this.state = player_states.IDLE_UP;
		}
		else if(this.state === player_states.WALK_DOWN) {
			this.state = player_states.IDLE_DOWN;
		}
		else if(this.state === player_states.WALK_RIGHT) {
			this.state = player_states.IDLE_RIGHT;
		}
		else if(this.state === player_states.WALK_LEFT) {
			this.state = player_states.IDLE_LEFT;
		}
	}

	updateAnimation() {
		switch(this.state) {
			case player_states.IDLE_UP:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkUp, new Vector(32, 32), 5),
											   new Vector(canvas.width/2 - 25),
											   [0], [1], new Vector(50, 50));
				break;
			case  player_states.IDLE_DOWN:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkDown, new Vector(32, 32), 5),
											   new Vector(canvas.width/2 - 25),
											   [0], [1], new Vector(50, 50));
				break;
			case  player_states.IDLE_LEFT:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkLeft, new Vector(32, 32), 5),
											   new Vector(canvas.width/2 - 25),
											   [0], [1], new Vector(50, 50));
				break;
			case player_states.IDLE_RIGHT:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkRight, new Vector(32, 32), 5),
											   new Vector(canvas.width/2 - 25),
											   [0], [1], new Vector(50, 50));
				break;
			case player_states.WALK_UP:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkUp, new Vector(32, 32), 5),
											   new Vector(canvas.width/2 - 25),
											   [0, 1, 2, 3, 4, 5, 6, 7], [3, 3, 3, 3, 3, 3, 3, 3], new Vector(50, 50));
				break;
			case player_states.WALK_DOWN:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkDown, new Vector(32, 32), 5),
											   new Vector(canvas.width/2 - 25),
											   [0, 1, 2, 3, 4, 5, 6, 7], [3, 3, 3, 3, 3, 3, 3, 3], new Vector(50, 50));
				break;
			case player_states.WALK_LEFT:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkLeft, new Vector(32, 32), 5),
											   new Vector(canvas.width/2 - 25),
											   [0, 1, 2, 3, 4, 5], [3, 3, 3, 3, 3, 3], new Vector(50, 50));
				break;
			case player_states.WALK_RIGHT:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkRight, new Vector(32, 32), 5),
											   new Vector(canvas.width/2 - 25),
											   [0, 1, 2, 3, 4, 5], [3, 3, 3, 3, 3, 3], new Vector(50, 50));
				break;
		}
	}
	
	draw() {
		noStroke();
		fill(this.color);
		//rect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
		
		switch(this.state) {
			case player_states.IDLE_UP_LEFT:
				strokeWeight(3);
				stroke(new Color(100, 255, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2 - 71, canvas.height/2 - 71);
				break;
			case player_states.IDLE_UP_RIGHT:
				strokeWeight(3);
				stroke(new Color(100, 255, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2 + 71, canvas.height/2 - 71);
				break;
			case player_states.IDLE_DOWN_LEFT:
				strokeWeight(3);
				stroke(new Color(100, 255, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2 - 71, canvas.height/2 + 71);
				break;
			case player_states.IDLE_DOWN_RIGHT:
				strokeWeight(3);
				stroke(new Color(100, 255, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2 + 71, canvas.height/2 + 71);
				break;
			case player_states.WALK_UP_LEFT:
				strokeWeight(3);
				stroke(new Color(255, 100, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2 - 71, canvas.height/2 - 71);
				break;
			case player_states.WALK_UP_RIGHT:
				strokeWeight(3);
				stroke(new Color(255, 100, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2 + 71, canvas.height/2 - 71);
				break;
			case player_states.WALK_DOWN_LEFT:
				strokeWeight(3);
				stroke(new Color(255, 100, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2 - 71, canvas.height/2 + 71);
				break;
			case player_states.WALK_DOWN_RIGHT:
				strokeWeight(3);
				stroke(new Color(255, 100, 100));
				line(canvas.width/2, canvas.height/2, canvas.width/2 + 71, canvas.height/2 + 71);
				break;
			default:
				this.animation.draw();
				break;
		}
	}
}
