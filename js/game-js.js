let divCard = $("<div class='card'></div>"),
contGame = $(".container-game");

function startGame(nLvl = 1) {
  let nCheckCard = -1,
  blockClick = false,
  cardOnBoard = gQuanityCard(nLvl),
  nextLvl = false;

  function gQuanityCard(nLvl = 1) {
    let qCard = nLvl * 6 - nLvl;
    if (qCard % 2 != 0) {
      qCard++;
    }
    return qCard;
  }

  function gArrayCard(qCard = 6) {
    let arrayCard = [];

    function intRandom(min = 0, max = 3) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    function checkArray(array, type) {
      let oneType = array.filter(function(number) {
        return number == type;
      });
      return oneType;
    }

    function fixArray() {
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
          if (checkArray(arrayCard,i).length % 2 != 0 && checkArray(arrayCard,j).length % 2 != 0 && i != j) {
            let first, second;
              for (var g = 0; g < arrayCard.length; g++) {
                if (arrayCard[g] == i) {
                  first = g;
                } else if (arrayCard[g] == j) {
                  second = g;
                }
              }
              arrayCard[first] = arrayCard[second];
          }
        }
      }
    }

    for (let i = 0; i < qCard; i++) {
      let newRand = intRandom(0,3);
      arrayCard.push(newRand);
    }

    fixArray();
    return arrayCard;
  }

  function clickOnCard(thisLvlArray) {

    function vieCard(card) {
      $(card).css('background','url('+getUrlBg(card)+') no-repeat').css('background-size','cover');
    }

    function getUrlBg(card) {
      let typeCard = thisLvlArray[$(card).index()];
      console.log(typeCard+' :'+ thisLvlArray[$(card).index()])
      return `/img/1/${typeCard}.png`;
    }

    function backBg(card1,card2) {
      blockClick = true;
      function func() {
        $(card1).css('background','');
        $(card2).css('background','');
        blockClick = false;
      }
      setTimeout(func,1500,card1,card2);
    }

    function setInvizeCard(card1,card2) {
      blockClick = true;
      function f() {
        $(card1).addClass('invizeCard');
        $(card2).addClass('invizeCard');
        blockClick = false;
      }
      setTimeout(f,300,card1,card2);
    }

    function checkSecondCard(card) {
      if (thisLvlArray[$(card).index()] == thisLvlArray[nCheckCard]) {
        setInvizeCard(card,$('.card')[nCheckCard]);
        cardOnBoard -= 2;
        if (cardOnBoard == 0) {
          setTimeout(uWin,500);
        }
      } else {
        backBg(card,$('.card')[nCheckCard]);
      }
      nCheckCard = -1;
    }

    function resetBoard() {
      $('.card').remove();
      $('.invizeCard').remove();
      cardOnBoard = gQuanityCard(nLvl);
    }

    function uWin() {
      nextLvl = confirm('Вы победили, играем следующий уровень?');
      if (nextLvl == true) {
        nLvl++;
        nCheckCard = -1;
        resetBoard();
        startGame(nLvl);
        addCard(nLvl);
        clickOnCard(gArrayCard(gQuanityCard(nLvl)));
      } else {
        alert('Goodby, mthrfck');
      }
    }

    $('.card').click(function () {
        if (!blockClick && !$(this).hasClass('invizeCard')) {
        let iCard = $(this).index();
        vieCard(this);
        if (nCheckCard != -1 && nCheckCard != iCard) {
          setTimeout(checkSecondCard(this),6000);
        } else if (nCheckCard == -1){
          nCheckCard = iCard;
      }}
    });
  }

  function addCard(nLvl) {
    for (var i = 0; i < gQuanityCard(nLvl); i++) {
      contGame.append(divCard.clone());
    };
  }

  function clickOnStart() {
    $('#start').click(function() {
      $("#menu").fadeOut(500);
      setTimeout("$('#main').fadeIn(600);",500);
      addCard(nLvl);
      clickOnCard(thisLvlArray);
    });
  }

  let thisLvlArray = gArrayCard(gQuanityCard(nLvl));

  clickOnStart();
}

$(document).ready(function() {
  startGame();
});
