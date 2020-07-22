let Player = {
  _score: 0,
  _lvlTime: 0,
  _timer: null,
  _timeScore: 0,
  _failCheck: 0,
  resetScore: function() {
    this._score = 0;
  },
  setNewScore: function() {
    if ( 15 * oGame.getLvl() - this._lvlTime > Math.exp(oGame.getLvl()/1.3) * 2 ) {
      this._timeScore = 15 * oGame.getLvl() - this._lvlTime;
      console.log(true);
    } else {
      this._timeScore = -Math.exp(oGame.getLvl()/1.3) * 2;
    }
    this._score += Math.ceil(this._timeScore + Math.log(oGame.getLvl()) * 2) * 100 ;
    console.log(this._timeScore * 100);
    console.log( Math.exp(oGame.getLvl()/2) * 200);
  },
  getScore: function() {
    return this._score;
  },
  resetTime: function() {
    this._lvlTime = 0;
  },
  startTimer: function() {
    this._timer = setInterval("Player._lvlTime += 0.5",500);
  },
  stopTimer: function() {
    clearInterval(this._timer);
  },
};
