<form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="photo" required><br><br>
    <input type="submit" name="upload">
</form>
<a href="index.php">index.php</a>
<?php
require_once("generateFileName.php");
require_once("resizeImage.php");
require_once("connect.php");

if(isset($_POST["upload"])) {
    $photo = $_FILES["photo"];
    if(!$photo) {
        echo "Ошибка!";
    }
    else {
        $extension = end(explode(".", $photo["name"]));
        $path = "photos/big/";
        $fileName = generateFileName("photos/big/", $extension);
        copy($photo["tmp_name"], $path . $fileName . "." . $extension);
        $path = "photos/small/";
        $fullPath = $path . $fileName . "." .  $extension;
        switch($extension) {
            case "png":
                $input = imagecreatefrompng($photo["tmp_name"]);
                $smallPhoto = resizeImage($input, 200);
                imagepng($smallPhoto, $fullPath);
                imagedestroy($smallPhoto);
                break;
            case "jpg":
                $input = imagecreatefromjpeg($photo["tmp_name"]);
                $smallPhoto = resizeImage($input, 200);
                imagejpeg($smallPhoto, $fullPath);
                imagedestroy($smallPhoto);
                break;
            case "jpeg":
                $input = imagecreatefromjpeg($photo["tmp_name"]);
                $smallPhoto = resizeImage($input, 200);
                imagejpeg($smallPhoto, $fullPath);
                imagedestroy($smallPhoto);
                break;
            case "wbmp":
                $input = imagecreatefromwbmp($photo["tmp_name"]);
                $smallPhoto = resizeImage($input, 200);
                imagewbmp($smallPhoto, $fullPath);
                imagedestroy($smallPhoto);
                break;
            case "gif":
                $input = imagecreatefromgif($photo["tmp_name"]);
                $smallPhoto = resizeImage($input, 200);
                imagegif($smallPhoto, $fullPath);
                imagedestroy($smallPhoto);
                break;
            default:
                echo "Ошибка!";
        }
        $pdo = connect();
        $query = $pdo->prepare("INSERT INTO photo (id, extension) VALUES(:id, :extension)");
        $query->execute([
            "id" => $fileName,
            "extension" => $extension
        ]);
    }
}