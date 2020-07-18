<?php
  include('GameSearchDouble.php');

  if (isset($_POST['nextLvl'])) {
    startLvl();
  }

  if (isset($_POST['idCard'])) {
    changeBgCard();
  }

  if (isset($_POST['check'])) {
    checkArray();
  }

  // returnPer(3);
 ?>
