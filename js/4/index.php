<?php
$data = <<<HTML
<form id="form" action="src" name="form" class="form">
    <div class="form-group">
        <label for="not-empty">Непустое значение:</label>
        <input type="text" id="not-empty" name="not-empty" class="form-control"
               data-display="Непустое значение"
               data-rules="required">
        <div class="not-empty-error text-danger"></div>
    </div>
    <div class="form-group">
        <label for="min-str">Минимум 6 символов:</label>
        <input type="text" id="min-str" name="min-str" class="form-control"
               data-display="Минимум 6 символов"
               data-rules="required|callback_min_length[6]">
        <div class="min-str-error text-danger"></div>
    </div>
    <div class="form-group">
        <label for="max-str">Максимум 22 символа:</label>
        <input type="text" id="max-str" name="max-str" class="form-control"
               data-display="Максимум 22 символа"
               data-rules="required|callback_max_length[22]">
        <div class="max-str-error text-danger"></div>
    </div>
    <div class="form-group">
        <label for="min-num">Минимум 10:</label>
        <input type="number" id="min-num" name="min-num" class="form-control"
               data-display="Минимум 10"
               data-rules="greater_than[10]">
        <div class="min-num-error text-danger"></div>
    </div>
    <div class="form-group">
        <label for="max-num">Максимум 30:</label>
        <input type="number" id="max-num" name="max-num" class="form-control"
               data-display="Максимум 30"
               data-rules="less_than[30]">
        <div class="max-num-error text-danger"></div>
    </div>

    <input type="submit" class="btn btn-primary send-button">
</form>
HTML;
echo $data;