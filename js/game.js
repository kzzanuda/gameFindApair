let divCard = $("<div class='card'></div>"),
mainPlace = $(".container-game"),
url = '/php/callPhp.php';

function clickOnCard() {
  $('.card').click( function () {
    let idCard = $(this).index(),
    data = `idCard=${idCard}`;
    console.log(data);
    $.ajax({
      url: url,
      type: "POST",
      data: data,
      success: function(response) {
        console.log(response);
        let urlBg = `/img/1/${response}.png`;
        $($('.card')[idCard]).css('background','url('+urlBg+') no-repeat').css('background-size','cover');
      }
    });
  });
}

function startGame() {
  $("#start").click( function () {
    $.ajax({
      url: url,
      type: "POST",
      data: "nextLvl=1",
      success: function(e) {
        $("#menu").fadeOut(500);
        setTimeout("$('#main').fadeIn(600);",500);
          console.log(e);
        for (var i = 0; i < e; i++) {
          mainPlace.append(divCard.clone());
        };

        clickOnCard();
        checkArray();
      }
    });
  });
}

function checkArray() {
  $.ajax({
    url: url,
    type: "POST",
    data: "check=1",
    success: function(f) {
      console.log(f);
    }
  });
}

$(document).ready( function() {

  startGame();

});
