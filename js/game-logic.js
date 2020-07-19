let oGame = {
  nLvl: 1,
  styleBoard: 1,
  contGame: $(".container-game"),
  divCard: $("<div class='card'></div>"),
  cardOnBoard: 0,
  gQuanityCard: function () {
    let qCard = this.nLvl * 6 - this.nLvl;
    if (qCard % 2 != 0) {
      qCard++;
    }
    this.cardOnBoard = qCard;
    return qCard;
  },
  gArrayCard: (qCard = 6) => {
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
  },
};
