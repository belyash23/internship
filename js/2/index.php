<?php

if (isset($_GET['params']) && isset($_GET['url'])) {
    $params = http_build_query($_GET['params']);
    $url = $_GET['url'];

    $data = file_get_contents($url . '?' . $params);

    header('Content-type: application/xml');
    echo $data;
}

