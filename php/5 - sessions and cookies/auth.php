<?php
session_start();
?>
<form action="" method="post">
    <input type="submit" name="auth" value="Авторизоваться">
</form>
<a href="А.php">А.php</a>
<a href="Б.php">Б.php</a>
<?php
if(isset($_POST['auth'])) {
    $_SESSION['authed'] = true;
}
