$(document).ready(function() {
  $('#butt-start').click(function() {
    $("#menu").fadeOut(500);
    setTimeout("$('#main').fadeIn(600);$('#back').fadeIn(600);",500);
    gameBoard.addCard(oGame.nLvl);
    gameBoard.clickOnCard();
  });

  $('#back').click(function() {
    $(this).fadeOut(500);
    $("#settings").fadeOut(500);
    $("#highscores").fadeOut(500);
    $('#main').fadeOut(500);
    setTimeout("$('#menu').fadeIn(600);",500);
  });

  $('#butt-settings').click(function() {
    $("#menu").fadeOut(500);
    setTimeout("$('#settings').fadeIn(600);$('#back').fadeIn(600);",500);
    $('#sound').text(outPutSetting(gameSettings.sound));
    $('#music').text(outPutSetting(gameSettings.music));
  });

  $('#sound').click(function () {
    gameSettings.sound = !gameSettings.sound;
    $('#sound').text(outPutSetting(gameSettings.sound));
    playSound(audio_click);
  });

  $('#music').click(function () {
    gameSettings.music = !gameSettings.music;
    $('#music').text(outPutSetting(gameSettings.music));
    playSound(audio_click);
  });

  $('button').click(() => playSound(audio_click));
});

let audio_place = new Audio ('/audio/take_card_on_table.mp3'),
audio_check = new Audio ('/audio/check_card.mp3'),
audio_click = new Audio ('/audio/click.mp3');

function outPutSetting(setting) {
  if (setting) {
    return 'On';
  } else {
    return 'Off';
  }
}

function playSound(sound) {
  if (gameSettings.sound == true) {
    sound.play();
  }
}
