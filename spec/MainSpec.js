describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });


  it("should expect two balls remianing given the beginning of a frame", function() {
    expect(frame.bowlsRemaining()).toEqual(2);
  });

  it("should expect one more ball given one non strike ball is recordScore on a normal frame", function() {
    frame.recordScore(5);
    expect(frame.bowlsRemaining()).toEqual(1);
  });

  it("should expect no more balls given two non strike balls are recordScore on a normal frame", function() {
    frame.recordScore(5);
    frame.recordScore(2);
    expect(frame.bowlsRemaining()).toEqual(0);
  });
  it("should expect no more balls given a strike is recordScore on a normal frame", function() {
    frame.recordScore(10);
    expect(frame.bowlsRemaining()).toEqual(0);
  });
  it("should expect two more balls given a strike is recordScore on a final frame", function() {
    frame.isLastFrame = true;
    frame.recordScore(10);
    expect(frame.bowlsRemaining()).toEqual(2);
  });
  it("should expect one more ball given a spare is recordScore on a final frame", function() {
    frame.isLastFrame = true;
    frame.recordScore(9);
    frame.recordScore(1);
    expect(frame.bowlsRemaining()).toEqual(1);
  });
  it("should expect a strike given first ball is a 10", function() {
    frame.recordScore(10);
    expect(frame.isStrike()).toEqual(true);
  });
  it("should expect not a strike given first ball is not a 10", function() {
    frame.recordScore(1);
    expect(frame.isStrike()).toEqual(false);
  });
  it("should expect not a strike given no balls recordScore", function() {
    expect(frame.isStrike()).toEqual(false);
  });
  it("should expect a spare given first two balls total 10", function() {
    frame.recordScore(1);
    frame.recordScore(9);
    expect(frame.isSpare()).toEqual(true);
  });
  it("should expect not a spare given first two balls do not 10", function() {
    frame.recordScore(1);
    frame.recordScore(8);
    expect(frame.isSpare()).toEqual(false);
  });
  it("should expect 8 given two fours recordScoreed", function() {
    frame.recordScore(4);
    frame.recordScore(4);
    expect(frame.rawTotal()).toEqual(8);
  });
  it("should expect 4 pins standing given a 6 bowled", function() {
    frame.recordScore(6);
    expect(frame.pinsStanding()).toEqual(4);
  });
  it("should expect 4 pins standing given a 4, 6 and a 6 on the last frame", function() {
    frame.isLastFrame = true;
    frame.recordScore(4);
    frame.recordScore(6);
    frame.recordScore(6);
    expect(frame.pinsStanding()).toEqual(4);
  });



});




  describe("Scoreboard", function() {
  var scoreboard;

  beforeEach(function() {
    scoreboard = new Scoreboard();
  });

  it("should be able to init", function() {
    scoreboard.recordScore(8);
    scoreboard.recordScore(1);
    
    expect(scoreboard.completedFrames.length).toEqual(1);

 
  });

/*
  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    it("should throw an exception if song is already playing", function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
*/
});
