<?php
$t = date("i");
echo "<p>The minute (of the server) is " . $t; 
echo ", and will give the following message:</p>";

if ($t < "30") {
  echo "You are too early, try it later";
} elseif ($t < "59") {
  echo "Here is the code: 17032004";
} else {
  echo "Special Secret unlocked";
}
?>