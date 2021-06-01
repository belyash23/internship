<?php
function generateFileName($path, $extension) {
    do {
        $fileName = time();
    } while(file_exists($path . $fileName . "." . $extension));
    return $fileName;
}