<?php
function generateFileName($path, $extension) {
    do {
        $fileName = rand() + time() . "." . $extension;
    } while(file_exists($path . $fileName));
    return $fileName;
}