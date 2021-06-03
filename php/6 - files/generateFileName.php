<?php

function generateFileName($path, $extension): string
{
    do {
        $fileName = rand() + time() . "." . $extension;
    } while (file_exists($path . $fileName));
    return $fileName;
}