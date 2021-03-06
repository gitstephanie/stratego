var Marshal = require('./Marshal'),
	General = require('./General'),
	Colonel = require('./Colonel'),
	Major = require('./Major'),
	Captain = require('./Captain'),
	Lieutenant = require('./Lieutenant'),
	Sergeant = require('./Sergeant'),
	Miner = require('./Miner'),
	Scout = require('./Scout'),
	Spy = require('./Spy'),
	Bomb = require('./Bomb'),
	Flag = require('./Flag');

function SetOfPieces () {
	this.marshal = new Marshal();
	this.general = new General();
	this.colonel1 = new Colonel();
	this.colonel2 = new Colonel();
	this.major1 = new Major();
	this.major2 = new Major();
	this.major3 = new Major();
	this.captain1 = new Captain();
	this.captain2 = new Captain();
	this.captain3 = new Captain();
	this.captain4 = new Captain();
	this.lieutenant1 = new Lieutenant();
	this.lieutenant2 = new Lieutenant();
	this.lieutenant3 = new Lieutenant();
	this.lieutenant4 = new Lieutenant();
	this.sergeant1 = new Sergeant();
	this.sergeant2 = new Sergeant();
	this.sergeant3 = new Sergeant();
	this.sergeant4 = new Sergeant();
	this.miner1 = new Miner();
	this.miner2 = new Miner();
	this.miner3 = new Miner();
	this.miner4 = new Miner();
	this.miner5 = new Miner();
	this.scout1 = new Scout();
	this.scout2 = new Scout();
	this.scout3 = new Scout();
	this.scout4 = new Scout();
	this.scout5 = new Scout();
	this.scout6 = new Scout();
	this.scout7 = new Scout();
	this.scout8 = new Scout();
	this.spy = new Spy();
	this.bomb1 = new Bomb();
	this.bomb2 = new Bomb();
	this.bomb3 = new Bomb();
	this.bomb4 = new Bomb();
	this.bomb5 = new Bomb();
	this.bomb6 = new Bomb();
	this.flag = new Flag();
}

module.exports = SetOfPieces;
