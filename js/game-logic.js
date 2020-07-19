let oGame = {
  nLvl: 1,
  contGame: $(".container-game"),
  divCard: $("<div class='card'></div>"),
  gQuanityCard: function () {
    let qCard = this.nLvl * 6 - this.nLvl;
    if (qCard % 2 != 0) {
      qCard++;
    }
    this.cardOnBoard = qCard;
    return qCard;
  },
},
gameSettings = {
  sound: false,
  styleBoard: 1,
};

function generateArrayCard (qCard = 6) {
  let arrayCard = [],
  qType = qCard/2;

  function randomType(min = 0, max = qType - 1) {
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
    for (var i = 0; i < qType; i++) {
      for (var j = 0; j < qType; j++) {
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
    let i = 0;
    while ( i < qCard ) {
      let newCard = randomType(0, qType-1);
      if (arrayCard.filter(item => item == newCard).length < 2) {
        arrayCard.push(newCard);
        i++;
      }
    }

    fixArray();
    return arrayCard;
}
