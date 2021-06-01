<?php
function resizeImage($input, $maxSideSize) {
    $outputWidth = $inputWidth = imagesx($input);
    $outputHeight = $inputHeight = imagesy($input);
    if($inputHeight > $maxSideSize && $inputHeight > $inputWidth) {
        $outputHeight = $maxSideSize;
        $outputWidth = $outputHeight / $inputHeight * $inputWidth;
    }
    elseif($inputWidth > $maxSideSize && $inputWidth > $inputHeight) {
        $outputWidth = $maxSideSize;
        $outputHeight = $outputWidth / $inputWidth * $inputHeight;
    }
    $output = imagecreatetruecolor($outputWidth, $outputHeight);
    imagecopyresampled($output, $input, 0, 0, 0, 0, $outputWidth, $outputHeight, $inputWidth, $inputHeight);
    imagedestroy($input);
    return $output;
}