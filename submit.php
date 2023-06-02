<!DOCTYPE html>
<html lang="cs" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Rekapitulace</title>
  </head>
  <body>
    <h1>Rekapitulace</h1>

<?php
  // Získání dat z odeslaného formuláře
  $name = $_POST['name'];
  $email = $_POST['email'];
  $product = $_POST['product'];
  $price = $_POST['price'];
  $quantity = $_POST['quantity'];

  // Výpočet celkové ceny
  $total = $price * $quantity;

  // Výpis zadaných informací a celkové ceny
  echo "<p>Jméno: $name</p>";
  echo "<p>E-mail: $email</p>";
  echo "<p>Produkt: $product</p>";
  echo "<p>Cena: $price Kč</p>";
  echo "<p>Počet kusů: $quantity</p>";
  echo "<p>Celková cena: $total Kč</p>";

  // Případné výpočty DPH a dalších úprav

  // ...

?>

  </body>
</html>
