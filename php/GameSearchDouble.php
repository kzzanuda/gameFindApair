<?php

  function generateArrayCard($qCard) {
    for ( $i = 0; $i < $qCard; $i++ ) {
      $e = rand(1,4);
      $arrayCard[] = $e;
    }
    return $arrayCard;
  }

  function startLvl()
  {
    static $iNumberLvl = 1;

    $iQuantity = $iNumberLvl * 6 - $iNumberLvl;
    if ($iQuantity % 2 != 0) {
      $iQuantity++;
    }
    $iNumberLvl++;
    $_SESSION['quaCard'] = $iQuantity;
    $_SESSION['arrayCard'] = generateArrayCard($iQuantity);
    echo $iQuantity;
  }

  function changeBgCard()
  {
    $index = $_POST['idCard'];
    //array(0 => 2, 1 => 1, 2 => 3);
    echo $_SESSION['arrayCard'][$index];
  }

  function returnPer($idCard){
    echo 'PER:'.$_SESSION['quaCard'].' '.$_SESSION['arrayCard'][$idCard].' '.$_SESSION['arrayCard'][1];
  }

  function checkArray()
  {
    echo var_dump($_SESSION['quaCard']);
  }
 ?>
