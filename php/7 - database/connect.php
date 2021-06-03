<?php

function connect()
{
    $dsn = "mysql:host=localhost;dbname=gallery";
    $user = "root";
    $password = "root";
    return new PDO($dsn, $user, $password);
}