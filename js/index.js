$(document).ready(function() {
  $('#start').click(function() {
    $("#menu").fadeOut(500);
    setTimeout("$('#main').fadeIn(600);",500);
    gameBoard.addCard(oGame.nLvl);
    gameBoard.clickOnCard();
  });
});
