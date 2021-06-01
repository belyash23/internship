<a href="upload.php">upload.php</a><br><br>
<?php
require_once("connect.php");
$pdo = connect();
$data = $pdo->query("SELECT * FROM photo ORDER BY views DESC");
$path = "photos/small/";
while($photo = $data->fetch()) {
    $id = $photo["id"];
    $fullPath = $path . $id . "." . $photo["extension"];
    echo <<<HERE
        <a href="photo.php?id=$id">
            <img src="$fullPath">
        </a><br>
HERE;
}