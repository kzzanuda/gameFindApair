$(document).ready(function() {
  $('#butt-start').click(function() {
    hideMenu();
    if (oGame.newGame == true) {
      oGame.newGame = false;
      gameBoard.addCard(oGame.getLvl());
      gameBoard.clickOnCard();
      setTimeout(changeButtonOnMain,1000);
    }
  });

  $('#continue').click(function() {
    $("#menu").fadeOut(500);
    setTimeout("$('#main').fadeIn(600);$('#back').fadeIn(600);",500);
  });

  $('#new-game').click(function() {
    hideMenu();
    oGame.resetLvl();
    gameBoard.nCheckCard = -1;
    $('.card').remove();
    $('.invizeCard').remove();
    gameBoard.cardOnBoard = oGame.gQuanityCard(oGame.getLvl());
    gameBoard.addCard(oGame.getLvl());
    gameBoard.thisLvlArray = generateArrayCard(gameBoard.cardOnBoard);
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
    playMusic(music_one);
  });

  $('button').click(() => playSound(audio_click));
});

let audio_place = new Audio ('/audio/take_card_on_table.mp3'),
audio_check = new Audio ('/audio/check_card.mp3'),
audio_click = new Audio ('/audio/click.mp3'),
music_one = new Audio('/audio/loop1.mp3');

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

function playMusic(music) {
  if (gameSettings.music == true){
    music.loop = true;
    music.play();
  } else {
    music.pause();
  }
}

function changeButtonOnMain() {
  $('#butt-start').hide();
  $('#continue').show();
  $('#new-game').show();
}

function hideMenu() {
  $("#menu").fadeOut(500);
  setTimeout("$('#main').fadeIn(600);$('#back').fadeIn(600);",500);
}
