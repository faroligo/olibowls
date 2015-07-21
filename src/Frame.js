function Frame() {
	this.isLastFrame = false;
	this._balls = [];
}
	
Frame.prototype.recordScore = function(pinsKnockedDown) {
	if ( this.bowlsRemaining() == 0 )
		throw new Error('Cannot add more balls to frame');

	//Add pins to the array
	this._balls.push(pinsKnockedDown);
}

Frame.prototype.isStrike = function() {
	return (this._balls.length > 0 && this._balls[0] == 10); //At least one ball bowled and that ball knocked 10 pins
}

Frame.prototype.isSpare = function() {
	return (this._balls.length > 1 && this._balls[0] + this._balls[1] == 10); //2 balls bowled and balls one and two knocked down all 10 pins
}

Frame.prototype.bowlsRemaining = function() {
	if ( (this.isStrike() || this.isSpare() ) && (!this.isLastFrame) )
		return 0;

	if ( (this.isStrike() || this.isSpare() ) )
		return 3 - this._balls.length;

	return 2 - this._balls.length;
}

Frame.prototype.rawTotal = function() {
	var sum = 0;
	for (var i = this._balls.length - 1; i >= 0; i--) {
		sum += this._balls[i];
	};
	return sum;
}

Frame.prototype.pinsStanding = function() {
	var pinsGone = 0;
	
	if (this._balls.length == 1)
		pinsGone = this._balls[0];

	else if (this._balls.length == 3)
		pinsGone = this._balls[2];
	else 
		pinsGone = 10;

	return 10 - pinsGone;
}