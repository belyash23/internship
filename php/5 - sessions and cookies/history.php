<?php
session_start();
$_SESSION["lastPage"] = $_SERVER["REQUEST_URI"];
