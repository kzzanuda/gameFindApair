<!DOCTYPE html>
<html lang="ru" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/fonts/style-font.css">
    <link rel="stylesheet" href="/css/game.css">
    <title>Game</title>
  </head>
  <body>

    <div class="container-menu" id="menu">
        <button id="start">Start</button>
        <button id="settings">Settings</button>
        <button id="top">Highscores</button>
    </div>

    <div class="container-game" id="main" style="display:none;">

    </div>

    <div class="container-inside-menu" id="inside-menu"  style="display:none;">
      <p id="messageLvl"></p>
      <button id="go-next">Next level</button>
      <button id="end-game">End the game</button>
    </div>
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
