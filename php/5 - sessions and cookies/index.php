<?php
session_start();
if(isset($_SESSION["authed"]) && isset($_SESSION['lastPage'])) {
    header("Location: {$_SESSION["lastPage"]}");
}
else {
    header('Location: auth.php');
}
