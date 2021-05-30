<?php
session_start();
if(isset($_SESSION["authed"])) {
    header("Location: {$_SESSION["lastPage"]}");
}
else {
    header('Location: auth.php');
}
