<?php
require_once("connect.php");
if(isset($_GET["id"])) {
    $id = (int) $_GET["id"];
    $pdo = connect();

    $query = $pdo->prepare("UPDATE photo SET views = views + 1 WHERE id = ?");
    $query->execute([$id]);

    $query = $pdo->prepare("SELECT * FROM photo WHERE id = ?");
    $query->execute([$id]);
    $photo = $query->fetch();

    $fullPath = "photos/big/" . $id . "." . $photo["extension"];
    $views = $photo['views'];
    echo <<<HERE
        <img src="$fullPath"><br><br>
        <p>просмотры: $views</p><br><br>
        <a href="index.php">index.php</a>
HERE;
}