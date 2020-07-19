let gameBoard = {
  blockClick: false,
  nCheckCard: -1,
  cardOnBoard: oGame.gQuanityCard(),
  thisLvlArray: generateArrayCard(this.cardOnBoard),
  showCard: function (card) {
    $(card).addClass('card-face');
    if (this.getClassThisCard(card) < 6) {
      $(card).append($(`<div class="type type${this.getClassThisCard(card)}"></div>`));
    } else if (this.getClassThisCard(card) < 12) {
      $(card).append($(`<div class="type type5"></div>`));
      $(card).append($(`<div class="type type${this.getClassThisCard(card)-6}"></div>`));
    } else if (this.getClassThisCard(card) < 18) {
      $(card).append($(`<div class="type type4"></div>`));
      $(card).append($(`<div class="type type${this.getClassThisCard(card)-12}"></div>`));
    } else if (this.getClassThisCard(card) < 24) {
      $(card).append($(`<div class="type type3"></div>`));
      $(card).append($(`<div class="type type${this.getClassThisCard(card)-18}"></div>`));
    } else if (this.getClassThisCard(card) < 30) {
      $(card).append($(`<div class="type type2"></div>`));
      $(card).append($(`<div class="type type${this.getClassThisCard(card)-24}"></div>`));
    }
  },
  getClassThisCard: function (card) {
    let typeCard = this.thisLvlArray[$(card).index()];
    return typeCard;
  },
  backBg: function (card1,card2) {
    this.blockClick = true;
    function func() {
      $(card1).children().remove();
      $(card1).removeClass('card-face');
      $(card2).children().remove();
      $(card2).removeClass('card-face');
      gameBoard.blockClick = false;
    }
    setTimeout(func,1500,card1,card2);
  },
  setInvizeCard: function (card1,card2) {
    this.blockClick = true;
    function f() {
      $(card1).children().remove();
      $(card1).addClass('invizeCard');
      $(card2).children().remove();
      $(card2).addClass('invizeCard');
      gameBoard.blockClick = false;
    }
    setTimeout(f,300,card1,card2);
  },
  checkSecondCard: function (card) {
    if (this.thisLvlArray[$(card).index()] == this.thisLvlArray[this.nCheckCard]) {
      this.setInvizeCard(card,$('.card')[this.nCheckCard]);
      this.cardOnBoard -= 2;
      if (this.cardOnBoard == 0) {
        setTimeout(this.uWin,500);
      }
    } else {
      this.backBg(card,$('.card')[this.nCheckCard]);
    }
    this.nCheckCard = -1;
  },
  uWin: function() {
    if (oGame.nLvl == 7) {
      alert('Вы прошли игру, поздравляем!');
      return;
    }
    let nextLvl = confirm('Вы победили, играем следующий уровень?');
    if (nextLvl == true) {
      oGame.nLvl++;
      this.nCheckCard = -1;
      $('.card').remove();
      $('.invizeCard').remove();
      gameBoard.cardOnBoard = oGame.gQuanityCard(oGame.nLvl);
      gameBoard.addCard(oGame.nLvl);
      gameBoard.thisLvlArray = generateArrayCard(gameBoard.cardOnBoard);
      gameBoard.clickOnCard();
    } else {
      alert('Goodby, mthrfck');
    }
  },
  addCard: function () {
    for (var i = 0; i < oGame.gQuanityCard(oGame.nLvl); i++) {
      oGame.contGame.append(oGame.divCard.clone());
    };
  },
  clickOnCard: function () {
    $('.card').click(function () {
      if (!gameBoard.blockClick && !$(this).hasClass('invizeCard')) {
      let iCard = $(this).index();
      if (gameBoard.nCheckCard != iCard){
        gameBoard.showCard(this);
      }
      if (gameBoard.nCheckCard != -1 && gameBoard.nCheckCard != iCard) {
        gameBoard.checkSecondCard(this);
      } else if (gameBoard.nCheckCard == -1){
        gameBoard.nCheckCard = iCard;
      }}
    });
  },
};
