<!DOCTYPE html>
<html lang="ru" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/fonts/style-font.css">
    <link rel="stylesheet" href="/css/game.css">
    <title>Game</title>
  </head>
  <body>

    <div class="menu container-menu" id="menu">
        <button id="butt-start">Start</button>
        <button id="butt-settings">Settings</button>
        <button id="butt-highscores">Highscores</button>
    </div>

    <div class="menu container-settings" id="settings" style="display:none;">
      <p>Sound: <span id="sound"></span></p>
      <p>Music: <span id="music"></span></p>
    </div>

    <div class="menu container-highscores" id="highscores" style="display:none;">

    </div>

    <div class="container-game" id="main" style="display:none;">

    </div>

    <button id="back" style="display:none;">Back</button>

    <div class="card" style="display:none;"></div>
    <div class="type type0" style="display:none;"></div>
    <div class="type type1" style="display:none;"></div>
    <div class="type type2" style="display:none;"></div>
    <div class="type type3" style="display:none;"></div>
    <div class="type type4" style="display:none;"></div>
    <div class="type type5" style="display:none;"></div>

    <script src="/js/jquery-3.5.1.min.js" charset="utf-8"></script>
    <script src="/js/game-logic.js" charset="utf-8"></script>
    <script src="/js/game-board.js" charset="utf-8"></script>
    <script src="/js/index.js" charset="utf-8"></script>

  </body>
</html>
