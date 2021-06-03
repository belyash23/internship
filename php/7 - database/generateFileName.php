<?php

function generateFileName($path, $extension)
{
    do {
        $fileName = rand() + time();
    } while (file_exists($path . $fileName . "." . $extension));
    return $fileName;
}