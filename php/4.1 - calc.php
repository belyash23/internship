<form action="" method="post">
    <label for="number1">Первое число:</label><br>
    <input type="number" id="number1" name="number1" required><br><br>
    <label for="number2">Второе число:</label><br>
    <input type="number" id="number2" name="number2" required><br><br>
    <label for="operation">Операция:</label><br>
    <select name="operation" id="operation" required>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="**">**</option>
        <option value="%">%</option>
    </select><br><br>
    <input type="submit" name="calc" value="Сосчитать">
</form>

<?php
if(isset($_POST['calc'])) {
    $number1 = $_POST['number1'];
    $number2 = $_POST['number2'];
    $operation = $_POST['operation'];
    if($number1 === null || $number2 === null || $operation === null) {
        echo 'Ошибка! Все поля должны быть заполнены.';
    }
    elseif(!is_numeric($number1) || !is_numeric($number2)) {
        echo 'Ошибка!';
    }
    else{
        switch($operation) {
            case '+':
                $result = $number1 + $number2;
                break;
            case '-':
                $result = $number1 - $number2;
                break;
            case '*':
                $result = $number1 * $number2;
                break;
            case '/':
                if($number2 == 0) {
                    echo "Ошибка!";
                }
                else{
                    $result = $number1 / $number2;
                }
                break;
            case '**':
                $result = $number1 ** $number2;
                break;
            case '%':
                $result = $number1 % $number2;
                break;
        }
        echo $result;
    }
}
