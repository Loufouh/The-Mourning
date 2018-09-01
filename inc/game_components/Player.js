"use strict";

const WSS = 5; // walking sprite speed
const WSSF = Math.floor(WSS*8/6);

const player_states = {
	IDLE_UP: "0",
	IDLE_DOWN: "1",
	IDLE_RIGHT: "2",
	IDLE_LEFT: "3",
	
	WALK_UP: "4",
	WALK_DOWN: "5",
	WALK_RIGHT: "6",
	WALK_LEFT: "7",
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

		this.spriteSheets.walkUp.src = "img/characters/player/walk-up/spritesheet.png";
		this.spriteSheets.walkDown.src = "img/characters/player/walk-down/spritesheet.png";
		this.spriteSheets.walkLeft.src = "img/characters/player/walk-left/spritesheet.png";
		this.spriteSheets.walkRight.src = "img/characters/player/walk-right/spritesheet.png";
	}
	
	update() {
		let oldState = this.state;
		this.determineState();
		
		if(this.state === oldState && this.animation != undefined)
			return;

		this.updateAnimation();
	}

	determineState() {
		if(keys_state.UP && !keys_state.DOWN) {
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
							       new Vector(canvas.width/2 - this.dim.x/2, canvas.height/2 - this.dim.y/2),
							       [0], [1], new Vector(this.dim.x, this.dim.y));
				break;
			case  player_states.IDLE_DOWN:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkDown, new Vector(32, 32), 5),
							       new Vector(canvas.width/2 - this.dim.x/2, canvas.height/2 - this.dim.y/2),
							       [0], [1], new Vector(this.dim.x, this.dim.y));
				break;
			case  player_states.IDLE_LEFT:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkLeft, new Vector(32, 32), 5),
							       new Vector(canvas.width/2 - this.dim.x/2, canvas.height/2 - this.dim.y/2),
							       [0], [1], new Vector(this.dim.x, this.dim.y));
				break;
			case player_states.IDLE_RIGHT:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkRight, new Vector(32, 32), 5),
							       new Vector(canvas.width/2 - this.dim.x/2, canvas.height/2 - this.dim.y/2),
							       [0], [1], new Vector(this.dim.x, this.dim.y));
				break;
			case player_states.WALK_UP:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkUp, new Vector(32, 32), 5),
							       new Vector(canvas.width/2 - this.dim.x/2, canvas.height/2 - this.dim.y/2),
							       [0, 1, 2, 3, 4, 5, 6, 7], [WSS, WSS, WSS, WSS, WSS, WSS, WSS, WSS], new Vector(this.dim.x, this.dim.y));
				break;
			case player_states.WALK_DOWN:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkDown, new Vector(32, 32), 5),
							       new Vector(canvas.width/2 - this.dim.x/2, canvas.height/2 - this.dim.y/2),
							       [0, 1, 2, 3, 4, 5, 6, 7], [WSS, WSS, WSS, WSS, WSS, WSS, WSS, WSS], new Vector(this.dim.x, this.dim.y));
				break;
			case player_states.WALK_LEFT:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkLeft, new Vector(32, 32), 5),
							       new Vector(canvas.width/2 - this.dim.x/2, canvas.height/2 - this.dim.y/2),
							       [0, 1, 2, 3, 4, 5], [WSSF, WSSF, WSSF, WSSF, WSSF, WSSF], new Vector(this.dim.x, this.dim.y));
				break;
			case player_states.WALK_RIGHT:
				this.animation = new Animation(new SpriteSheet(this.spriteSheets.walkRight, new Vector(32, 32), 5),
							       new Vector(canvas.width/2 - this.dim.x/2, canvas.height/2 - this.dim.y/2),
							       [0, 1, 2, 3, 4, 5], [WSSF, WSSF, WSSF, WSSF, WSSF, WSSF], new Vector(this.dim.x, this.dim.y));
				break;
		}
	}
	
	draw() {
		this.animation.draw();
	}
}
