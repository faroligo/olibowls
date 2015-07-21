function Scoreboard() {
	this.maxFrames = 10;
	this.completedFrames = [];
	this.currentFrame = new Frame();
}

Scoreboard.prototype.recordScore = function(pinsKnockedDown) {
  this.currentFrame.recordScore(pinsKnockedDown);

  if (this.currentFrame.bowlsRemaining() == 0) {
  	this.completedFrames.push(this.currentFrame);
  	this.currentFrame = new Frame();
  }
  
};