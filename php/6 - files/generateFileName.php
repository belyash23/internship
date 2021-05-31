<?php
function generateFileName($path, $extension) {
    do {
        $fileName = time() . "." . $extension;
    } while(file_exists($path . $fileName));
    return $fileName;
}