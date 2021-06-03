<a href="upload.php">upload.php</a><br><br>
<?php

$path = "photos/small/";
$photos = array_slice(scandir($path), 2);
foreach ($photos as $photo) {
    $fullPath = $path . $photo;
    echo <<<HERE
        <a href="photo.php?name=$photo">
            <img src="$fullPath">
        </a><br>
HERE;
}