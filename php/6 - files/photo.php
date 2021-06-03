<?php

if (isset($_GET["name"])) {
    $fullPath = "photos/big/" . $_GET["name"];
    echo <<<HERE
        <img src="$fullPath"><br><br>
        <a href="index.php">index.php</a>
HERE;
}