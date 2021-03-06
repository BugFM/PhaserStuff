/**
 * Level.
 */
function Level() {
	
	Phaser.State.call(this);
}

/** @type Phaser.State */
var Level_proto = Object.create(Phaser.State.prototype);
Level.prototype = Level_proto;
Level.prototype.constructor = Level;

var healthCount;
var fruitCount;

Level.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;

};

// load 
Level.prototype.preload = function () {
	
	this.load.pack('level', 'assets/pack.json');
};

// place sprites and colliders
Level.prototype.create = function () {
	// this.add.sprite(x, y, key, frame, group)
	
	this.beforeCreate();
	
	var _BG = this.add.tileSprite(-11, -7, 1713, 750, 'BG', null);
	_BG.scale.setTo(1.1289946683730876, 1.0275188997398834);
	_BG.fixedToCamera = true;

	var _FG = this.add.tileSprite(-11, -7, 1, 1, 'BG', null);
    	_FG.fixedToCamera = true;

	var _back = this.add.group();
	
	var _Bush__2_ = this.add.tileSprite(103, 1459, 133, 65, 'objects', 'Bush (2)', _back);
	_Bush__2_.scale.setTo(1.2436090513997489, 1.4061541519275604);
	
	this.add.sprite(1114, 493, 'objects', 'Crate', _back);

	var tileX[];
	var tileY[];

	function addTile(x, y, game){
	var sprite = game.add.sprite(x,y,'tiles','1', _back);
	sprite.scale.setTo(4, 4);
	}

	addTile(1074, 1143, this);
	
	this.add.tileSprite(1202, 1143, 512, 128, 'tiles', '2', _back);
	
	this.add.sprite(1714, 1143, 'tiles', '3', _back);
	
	this.add.sprite(1714, 1527, 'tiles', '16', _back);
	
	this.add.sprite(1074, 1527, 'tiles', '12', _back);
	
	this.add.tileSprite(1202, 1527, 512, 128, 'tiles', '9', _back);
	
	this.add.tileSprite(1074, 1271, 129, 256, 'tiles', '4', _back);
	
	this.add.tileSprite(1714, 1271, 128, 256, 'tiles', '6', _back);
	
	this.add.tileSprite(1202, 1271, 512, 256, 'tiles', '5', _back);
	
	this.add.sprite(-11, 1529, 'tiles', '1', _back);
	
	this.add.tileSprite(117, 1529, 512, 128, 'tiles', '2', _back);
	
	this.add.sprite(629, 1529, 'tiles', '3', _back);
	
	this.add.sprite(629, 1657, 'tiles', '16', _back);
	
	this.add.sprite(254, 1495, 'objects', 'Mushroom_2', _back);
	
	this.add.sprite(-11, 1657, 'tiles', '12', _back);
	
	this.add.tileSprite(117, 1657, 512, 128, 'tiles', '9', _back);
	
	this.add.sprite(1013, 1273, 'tiles', '1', _back);
	
	this.add.tileSprite(1141, 1273, 512, 128, 'tiles', '2', _back);
	
	this.add.sprite(1653, 1273, 'tiles', '3', _back);
	
	this.add.sprite(2037, 1657, 'tiles', '16', _back);
	
	this.add.sprite(1013, 1657, 'tiles', '12', _back);
	
	this.add.tileSprite(1141, 1657, 896, 128, 'tiles', '9', _back);
	
	this.add.tileSprite(1141, 1401, 512, 256, 'tiles', '5', _back);
	
	this.add.tileSprite(1653, 1401, 128, 128, 'tiles', '6', _back);
	
	this.add.tileSprite(1013, 1401, 129, 256, 'tiles', '4', _back);
	
	this.add.sprite(1781, 1529, 'tiles', '11', _back);
	
	this.add.sprite(1653, 1529, 'tiles', '10', _back);
	
	this.add.sprite(2037, 1529, 'tiles', '3', _back);
	
	this.add.sprite(1909, 1529, 'tiles', '2', _back);
	
	this.add.sprite(-11, 505, 'tiles', '1', _back);
	
	this.add.tileSprite(117, 505, 512, 128, 'tiles', '2', _back);
	
	var _Bush__2_1 = this.add.sprite(34, 382, 'objects', 'Bush (2)', _back);
	_Bush__2_1.scale.setTo(1.9849624160619828, 1.9384615456376617);
	
	this.add.sprite(629, 505, 'tiles', '3', _back);
	
	this.add.sprite(629, 633, 'tiles', '16', _back);
	
	this.add.sprite(27, 234, 'objects', 'Tree_3', _back);
	
	this.add.sprite(-11, 633, 'tiles', '12', _back);
	
	this.add.tileSprite(117, 633, 512, 128, 'tiles', '9', _back);
	
	this.add.sprite(1397, 377, 'tiles', '15', _back);
	
	this.add.sprite(1269, 377, 'tiles', '13', _back);
	
	this.add.sprite(1013, 761, 'tiles', '13', _back);
	
	this.add.sprite(1141, 761, 'tiles', '14', _back);
	
	this.add.sprite(1269, 761, 'tiles', '15', _back);
	
	this.add.sprite(503, 1030, 'tiles', '13', _back);
	
	this.add.sprite(631, 1030, 'tiles', '14', _back);
	
	this.add.sprite(759, 1030, 'tiles', '15', _back);
	
	this.add.sprite(29, 1233, 'objects', 'Tree_2', _back);
	
	this.add.sprite(509, 1494, 'objects', 'Mushroom_1', _back);
	
	this.add.sprite(729, 955, 'objects', 'Crate', _back);
	
	this.add.sprite(652, 955, 'objects', 'Crate', _back);
	
	this.add.sprite(575, 955, 'objects', 'Crate', _back);
	
	this.add.sprite(652, 878, 'objects', 'Crate', _back);
	
	this.add.sprite(1056, 491, 'objects', 'Tree_3', _back);
	
	this.add.sprite(1052, 724, 'objects', 'Mushroom_2', _back);
	
	this.add.sprite(1899, 1259, 'objects', 'Tree_3', _back);
	
	this.add.sprite(1855, 1457, 'objects', 'Crate', _back);
	
	this.add.sprite(1354, 340, 'objects', 'Mushroom_1', _back);
	
	this.add.sprite(1292, 107, 'objects', 'Tree_3', _back);
	
	this.add.sprite(-7, 446, 'objects', 'Bush (1)', _back);
	
	this.add.sprite(1642, 1110, 'objects', 'Tree_1', _back);
	
	this.add.tileSprite(-46, 1742, 2245, 201, 'tiles', '18', _back);
	
	this.add.sprite(571, 456, 'objects', 'Stone', _back);
	
	this.add.sprite(1115, 1213, 'objects', 'Bush (1)', _back);
	
	this.add.sprite(1378, 1212, 'objects', 'Bush (2)', _back);
	
	this.add.sprite(1511, 1077, 'objects', 'Crate', _back);
	
	this.add.sprite(1471, 1001, 'objects', 'Crate', _back);
	
	var _player = this.add.sprite(203, 1331, 'player', 0);
	_player.anchor.setTo(0.5, 0.0);
	_player.animations.add('walk', [8, 9, 10, 11], 6, true);
	_player.animations.add('jump', [4, 5], 6, true);
	_player.animations.add('idle', [0, 1, 2], 4, true);
	_player.fruits = 0;
	_player.health = 100;
	_player.coffee = false;
	_player.coffeeCount = 0;
	_player.testCoverage = 0;

	var punch = {name: "punch"};
	_player.weapons =[punch]; // spool through array of weapons
	this.game.physics.arcade.enable(_player);
	_player.body.setSize(86.39996337890625, 85.96431732177734, 46.800018310546875, 109.2168960571289);
	
	var _enemy = this.add.sprite(100, 1331, 'enemy', 0);
	_enemy.health = 5;

	var _water = this.add.tileSprite(-51, 1644, 2241, 99, 'tiles', '17');
		
	var _fruits = this.add.physicsGroup(Phaser.Physics.ARCADE);
	_fruits.position.setTo(-11, -7);
	
	this.add.sprite(639, 444, 'objects', 'fruit', _fruits);
	
	this.add.sprite(564, 444, 'objects', 'fruit', _fruits);
	
	this.add.sprite(489, 444, 'objects', 'fruit', _fruits);
	
	this.add.sprite(414, 444, 'objects', 'fruit', _fruits);
	
	this.add.sprite(339, 444, 'objects', 'fruit', _fruits);
	
	this.add.sprite(264, 444, 'objects', 'fruit', _fruits);
	
	this.add.sprite(189, 444, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1100, 1200, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1150, 1200, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1200, 1200, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1250, 1200, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1300, 1200, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1350, 1200, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1400, 1200, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1450, 1200, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1500, 1200, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1875, 1350, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1925, 1300, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1950, 1250, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1975, 1200, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1975, 1150, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1950, 1100, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1900, 1050, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1100, 675, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1150, 675, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1200, 675, 'objects', 'fruit', _fruits);
	
	this.add.sprite(325, 1425, 'objects', 'fruit', _fruits);
	
	this.add.sprite(375, 1425, 'objects', 'fruit', _fruits);
	
	this.add.sprite(425, 1425, 'objects', 'fruit', _fruits);
	
	this.add.sprite(475, 1425, 'objects', 'fruit', _fruits);
	
	this.add.sprite(525, 1425, 'objects', 'fruit', _fruits);
	
	this.add.sprite(525, 1375, 'objects', 'fruit', _fruits);
	
	this.add.sprite(475, 1375, 'objects', 'fruit', _fruits);
	
	this.add.sprite(425, 1375, 'objects', 'fruit', _fruits);
	
	this.add.sprite(375, 1375, 'objects', 'fruit', _fruits);
	
	this.add.sprite(325, 1375, 'objects', 'fruit', _fruits);
	
	this.add.sprite(325, 1325, 'objects', 'fruit', _fruits);
	
	this.add.sprite(375, 1325, 'objects', 'fruit', _fruits);
	
	this.add.sprite(425, 1325, 'objects', 'fruit', _fruits);
	
	this.add.sprite(475, 1325, 'objects', 'fruit', _fruits);
	
	this.add.sprite(525, 1325, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1173, 1500, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1223, 1500, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1273, 1500, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1323, 1500, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1373, 1500, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1423, 1500, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1473, 1500, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1523, 1500, 'objects', 'fruit', _fruits);
	
	this.add.sprite(1573, 1500, 'objects', 'fruit', _fruits);
	
	this.add.sprite(114, 444, 'objects', 'fruit', _fruits);
	
	var _front = this.add.group();
	_front.position.setTo(-11, -7);
	
	var _Tree_10 = this.add.sprite(1302, 1083, 'objects', 'Tree_3', _front);
	_Tree_10.scale.setTo(0.7332871556082268, 0.7658318667609785);
	
	this.add.sprite(371, 465, 'objects', 'Bush (2)', _front);
	
	this.add.sprite(178, 464, 'objects', 'Bush (1)', _front);
	
	this.add.sprite(586, 997, 'objects', 'Stone', _front);
	
	this.add.sprite(783, 1007, 'objects', 'Bush (3)', _front);
	
	this.add.sprite(1181, 997, 'objects', 'Tree_2', _front);
	
	this.add.sprite(1601, 1253, 'objects', 'Tree_1', _front);
	
	this.add.sprite(2051, 1497, 'objects', 'Stone', _front);
	
	this.add.sprite(2063, 1442, 'objects', 'Sign_1', _front);
	
	this.add.sprite(1206, 717, 'objects', 'Bush (1)', _front);
	
	this.add.sprite(1293, 351, 'objects', 'Bush (3)', _front);
	
	this.add.sprite(36, 1490, 'objects', 'Bush (1)', _front);
	
	this.add.sprite(292, 1506, 'objects', 'Tree_1', _front);
	
	this.add.sprite(331, 1273, 'objects', 'Tree_3', _front);
	
	this.add.sprite(594, 1486, 'objects', 'Sign_2', _front);
	
	var _collisionLayer = this.add.physicsGroup(Phaser.Physics.ARCADE);
	_collisionLayer.position.setTo(-11, -7);
	
	this.add.tileSprite(3, 1543, 760, 38, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1028, 1289, 760, 38, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(516, 1047, 382, 17, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(4, 522, 760, 38, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1027, 775, 378, 26, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1285, 391, 248, 38, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1085, 1160, 766, 38, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1793, 1546, 378, 38, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(587, 963, 229, 15, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(664, 886, 74, 15, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1524, 1087, 73, 25, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1484, 1010, 73, 25, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1868, 1469, 73, 25, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(1125, 500, 74, 15, 'tiles', 'physics', _collisionLayer);
	
	this.add.tileSprite(-12, 1740, 2201, 25, 'tiles', 'physics', _collisionLayer);
	
    healthCount = this.game.add.text(100, 100, "health: "+ _player.health, {font:'32px Arial', fill: '#FF0000', align: 'center'});
    fruitCount = this.game.add.text(100, 130, "fruit"+ _player.fruits, {font:'32px Arial', fill: '#FF0000', align: 'center'});
    healthCount.anchor.set(0, 0);
    fruitCount.anchor.set(0, 0);
    _FG.addChild(healthCount);
    _FG.addChild(fruitCount);

	this.tiler(2000, 1529, 20, _collisionLayer);

	var _coffee = this.add.physicsGroup(Phaser.Physics.ARCADE);
	this.add.sprite(639, 1444, 'objects', 'coffee', _coffee);

	_coffee.setAll("body.allowGravity", false);
	_fruits.setAll("body.allowGravity", false);
	_collisionLayer.setAll("body.immovable", true);
	_collisionLayer.setAll("body.allowGravity", false);
	_collisionLayer.setAll("renderable", false);
	_collisionLayer.setAll("body.checkCollision.down", false);

	// public fields	
	this.fBG = _BG;
	this.fPlayer = _player;
	this.fEnemy = _enemy;
	this.fCoffee = _coffee;
	this.fWater = _water;
	this.fFruits = _fruits;
	this.fCollisionLayer = _collisionLayer;
	this.afterCreate();
	
};

Level.prototype.tiler = function(startx, starty, number, collisionLayer){
		for(var i = 0; i < number; i++){
			this.createPhysicalTile(startx, starty, collisionLayer);
			startx += 128;
		}
	};

Level.prototype.createPhysicalTile = function(x, y, collisionLayer){
	this.add.sprite(x, y, 'tiles', '14', this._back);
	this.add.tileSprite(x, y, 74, 15, 'tiles', 'physics', this._collisionLayer);
}

Level.prototype.createGhostTile = function(x, y){
	this.add.sprite(x, y, 'tiles', '14', _back);
}

Level.prototype.beforeCreate = function() {

	// size of world
	this.world.resize(18000, 1800); // expand first value to lengthen

	// start the Arcade system
	this.game.physics.startSystem(Phaser.Physics.ARCADE);

	// set the global gravity
	this.game.physics.arcade.gravity.y = 800; // 2000 can be gravity bomb, 

	// create the cursors
	this.cursors = this.input.keyboard.createCursorKeys();
};

Level.prototype.afterCreate = function () {
	this.camera.follow(this.fPlayer);
};

Level.prototype.update = function() {

    healthCount.setText("Health: " +this.fPlayer.health);
    healthCount.bringToTop();
    fruitCount.setText("Fruit: "+this.fPlayer.fruits);
    fruitCount.bringToTop();

	if(this.fPlayer.fruits > 10){
		var weapon = {name: "Gatling Gun", bullets: 100};
		playerGetsWeapon(this.fPlayer, weapon);
	}

	if(this.fPlayer.fruits > 20){

		this.game.state.add('Level2', Level2);
		this.game.state.start('Level2');
	}

	if(this.fPlayer.coffeeCount < 0){
		this.fPlayer.coffee = false;
		this.fPlayer.coffeeCount = 0;
	}

	var powerButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	var jumpButton = this.input.keyboard.addKey(Phaser.KeyCode.ONE);

	var leftMove = -200;
	var rightMove = 200;

	this.physics.arcade.collide(this.fPlayer, this.fCollisionLayer);

	if(this.fPlayer.coffee){

		leftMove = 4 * leftMove;
		rightMove = 4 * rightMove;
		this.fPlayer.coffeeCount -=1;
	}

	if (this.cursors.left.isDown) {
		this.fPlayer.body.velocity.x = leftMove;
	}  
	else if(this.cursors.right.isDown) {
		this.fPlayer.body.velocity.x = rightMove;
	} 

	else {
		// dont move in the horizontal
		this.fPlayer.body.velocity.x = 0;
	}

	// a flag to know if the player is (down) touching the platforms
	var touching = this.fPlayer.body.touching.down;


	if (powerButton.isDown){
		leftmove = -400;
		rightmove = 400
	}

	if (touching && this.cursors.up.isDown || jumpButton.isDown) {
		// jump if the player is on top of a platform and the up key is pressed
		this.fPlayer.body.velocity.y = -600;
	}
	
	if (touching) {
	    if (this.fPlayer.body.velocity.x == 0) {
	        // if it is not moving horizontally play the idle
	        this.fPlayer.play("idle");
	    } else {
	        // if it is moving play the walk
	        this.fPlayer.play("walk");
	    }
	} else {
	    // it is not touching the platforms so it means it is jumping.
	    this.fPlayer.play("jump");
	}
	
	// update the facing of the player
	if (this.cursors.left.isDown) {
	    // face left
	    this.fPlayer.scale.x = -1;
	} else if (this.cursors.right.isDown) {
	   // face right
	   this.fPlayer.scale.x = 1;
	}
	
	// fruits
	this.physics.arcade.overlap(this.fPlayer, this.fFruits, this.playerVsFruit, null, this);

	// coffee
	this.physics.arcade.overlap(this.fPlayer, this.fCoffee, this.playerVsCoffee, null, this);
	
	// water
	this.fWater.tilePosition.x -= 1;
	this.fBG.tilePosition.x = -this.camera.x;
};

/**
 * @param {Phaser.Sprite}
 *            player
 * @param {Phaser.Sprite}
 *            fruit
 */
Level.prototype.playerVsFruit = function(player, fruit) {
	fruit.body.enable = false;

	player.fruits +=1 ;

	console.log("You have :"+player.fruits+" fruits")
	
	this.add.tween(fruit).to({
		y : fruit.y - 50
	}, 1000, "Expo.easeOut", true);
	
	this.add.tween(fruit.scale).to({
		x : 2,
		y : 2
	}, 1000, "Linear", true);

	this.add.tween(fruit).to({
		alpha : 0.2
	}, 1000, "Linear", true).onComplete.add(fruit.kill, fruit);
};


/**
 * @param {Phaser.Sprite}
 *            player
 * @param {Phaser.Sprite}
 *            coffee
 */
Level.prototype.playerVsCoffee = function(player, coffee) {
	coffee.body.enable = false;
	player.coffee = true;
	player.coffeeCount = 300;

	console.log("You have :"+player.coffee+" coffee")
	
	this.add.tween(coffee).to({
		y : coffee.y - 50
	}, 1000, "Expo.easeOut", true);
	
	this.add.tween(coffee.scale).to({
		x : 2,
		y : 2
	}, 1000, "Linear", true);

	this.add.tween(coffee).to({
		alpha : 0.2
	}, 1000, "Linear", true).onComplete.add(coffee.kill, coffee);
};

/**
 * @param {Phaser.Sprite}
 *            player
 * @param {Phaser.Sprite}
 *            weapon
 */
Level.prototype.playerGetsWeapon = function(player, weapon) {
	player.weapons.push(weapon.name);
	player.weapons.forEach(function(wep){
		console.log("You have got :"+wep.name);
	});



// Level.prototype.playerVsEnemy = function(player, enemy) {
	
// 	enemy.body.enable = false;
	
// 	this.add.tween(enemy).to({
// 		y : enemy.y - 50
// 	}, 1000, "Expo.easeOut", true);
	
// 	this.add.tween(enemy.scale).to({
// 		x : 2,
// 		y : 2
// 	}, 1000, "Linear", true);

// 	this.add.tween(enemy).to({
// 		alpha : 0.2
// 	}, 1000, "Linear", true).onComplete.add(enemy.kill, enemy);
// }


    

};

