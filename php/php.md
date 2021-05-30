# PHP - практические задания

## Основы PHP
**1.**

  a) 
  ```php
  <?php
  $str = 'str';
  echo $str;
  ```
  b)
  ```php
  <?php
  $int  = 1;
  echo $int;
  ```
  c)
  ```php
  <?php
  $float = 1.1;
  echo $float;
  ```
  d)
  ```php
  <?php
  const CONSTANT = 1;
  echo CONSTANT;
  ```
  e)
  ```php
  <?php
  $oct = 010;
  echo $oct;
  ```
  f)
  ```php
  <?php
  $hex = 0xABC;
  echo $hex;
  ```
**2.** Если заключить переменные в двойные кавычки, то ничего не изменится. Если заключить переменные в одинарные кавычки, то вместо значений переменных выведутся названия переменных.

**3.** При выводе числа конвертируются в десятичную систему счисления. При выполнении команды `echo 018;` или `echo 019;` происходит ошибка, т.к. в восьмеричной системе счисления нет чисел 8 и 9.

**4.**
```php
<?php
echo 0x0.' ';
echo 0x1.' ';
echo 0x2.' ';
echo 0x3.' ';
echo 0x4.' ';
echo 0x5.' ';
echo 0x6.' ';
echo 0x7.' ';
echo 0x8.' ';
echo 0x9.' ';
echo 0xA.' ';
echo 0xB.' ';
echo 0xC.' ';
echo 0xD.' ';
echo 0xE.' ';
echo 0xF.' ';
```

**5.**
```php
<?php
$firstLine = "Я помню чудное мгновенье:";
$secondLine = "Передо мной явилась ты,";
$thirdLine = "Как мимолетное виденье,";
$forthLine = "Как гений чистой красоты.";
$author = "А.С. Пушкин";

echo "{$firstLine}<br>";
echo "{$secondLine}<br>";
echo "{$thirdLine}<br>";
echo "{$forthLine}<br>";
echo "<i>{$author}</i>";
```

**6.**
```php
<?php
$firstLine = "Я помню чудное мгновенье:";
$secondLine = "Передо мной явилась ты,";
$thirdLine = "Как мимолетное виденье,";
$forthLine = "Как гений чистой красоты.";
$author = "А.С. Пушкин";

echo <<<HERE
{$firstLine}<br>
{$secondLine}<br>
{$thirdLine}<br>
{$forthLine}<br>
<i>{$author}</i>
HERE;
```

**7.** При сложении `10` и `привет` получается `10`, т.к. строка `привет` приводится к `0`.

**8.**
```php
<?php
echo "true xor true = " . ((true xor true) ? "true" : "false");
echo "<br>true xor false = " . ((true xor false) ? "true" : "false");
echo "<br>false xor true = " . ((false xor true) ? "true" : "false");
echo "<br>false xor false = " . ((false xor false) ? "true" : "false");
```
`$a xor $a` равно `false` при любых значениях `$a`

## Ветвления и функции
**1.**
```php
<?php
const A = 1;
const B = 2;
$a = A;
$b = B;
$result = 0;

if($a >= 0 && $b >= 0) {
	$result = $a + $b;
}
elseif($a < 0 && $b < 0) {
	$result = $a - $b;
}
else {
	$result = $a * $b;
}

echo $result;
```

**2.**
```php
<?php
$a = 2;
$b = 3;
echo ($a > $b) ? $a: $b;
```

**3.**
```php
<?php
$a = 2;
switch($a) {
	case 0:
		echo 0 . '<br>';
	case 1:
		echo 1 . '<br>';
	case 2:
		echo 2 . '<br>';
	case 3:
		echo 3 . '<br>';
	case 4:
		echo 4 . '<br>';
	case 5:
		echo 5 . '<br>';
	case 6:
		echo 6 . '<br>';
	case 7:
		echo 7 . '<br>';
	case 8:
		echo 8 . '<br>';
	case 9:
		echo 9 . '<br>';
}
```

**4.**
```php
<?php
function sum($a, $b) {
	return $a + $b;
}
function sub($a, $b) {
	return $a - $b;
}
function mul($a, $b) {
	return $a * $b;
}
function div($a, $b) {
	return $a / $b;
}
function power($a, $b) {
	return $a ** $b;
}
function mod($a, $b) {
	return $a % $b;
}
```

**5.**
```php
<?php
function sum($a, $b) {
	return $a + $b;
}
function sub($a, $b) {
	return $a - $b;
}
function mul($a, $b) {
	return $a * $b;
}
function div($a, $b) {
	return $a / $b;
}
function power($a, $b) {
	return $a ** $b;
}
function mod($a, $b) {
	return $a % $b;
}

function mathOperation($a, $b, $operation) {
	switch ($operation) {
		case '+':
			return sum($a, $b);
		case '-':
			return sub($a, $b);
		case '*':
			return mul($a, $b);
		case '/':
			return div($a, $b);
		case '**':
			return power($a, $b);
		case '%':
			return mod($a, $b);
	}
}
```

**6.**
```php
<?php
function power($val, $pow) {
	if($pow === 0) {
		return 1;
	}
	elseif($pow == 1) {
		return $val;
	}
	elseif($pow < 0) {
		return 1 / power($val, abs($pow));
	}
	return $val * power($val, $pow-1);
}
```

**7.**
```php
<?php
function maxNum($a, $b) {
	return ($a > $b) ? $a : $b;
}
function minNum($a, $b) {
	return ($a < $b) ? $a : $b;
}

$a = 50;
$b = 5;
$mul = $a * $b;
$max = maxNum($a, $b);
$min = minNum($a, $b);

if($mul > 100 && $mul < 1000) {
	echo $max - $min;
}
elseif($mul > 1000) {
	echo $mul / $max;
}
```

## Циклы и массивы
**1.**
```php
<?php
$i = 0;
while($i < 100) {
	if($i % 3 === 0) {
		echo $i.' ';
	}
	$i++;
}
```

**2.**
```php
<?php
$i = 0;
do {
	if($i == 0) {
		echo $i . ' - это ноль<br>';
	}
	elseif($i % 2 == 1) {
		echo $i . ' - нечётное число<br>';
	}
	else {
		echo $i . ' - чётное число<br>';
	}
	$i++;
} while($i <= 10);
```

**3.**
```php
<?php
for($i = 0; $i < 10; print_r($i++ . ' '));
```

**4.**
```php
<?php
$regions = [
'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
'Рязанская область' => ['Рязань', 'Касимов', 'Михайлов'],
'Калужская область' => ['Калуга', 'Обнинск', 'Козельск']
];
foreach($regions as $region => $cities) {
	echo $region . ':<br>';
	echo implode(', ', $cities) . '<br>';
}
```

**5.**
```php
<?php
$regions = [
    'Московская область' => ['Москва', 'Зеленоград', 'Клин'],
    'Ленинградская область' => ['Санкт-Петербург', 'Всеволожск', 'Павловск', 'Кронштадт'],
    'Рязанская область' => ['Рязань', 'Касимов', 'Михайлов'],
    'Калужская область' => ['Калуга', 'Обнинск', 'Козельск']
];
foreach($regions as $region => $cities) {
    echo $region . ':<br>';
    $filteredCities = array_filter($cities, function($city) {
        $firstLetter = mb_substr($city, 0, 1);
        return $firstLetter === 'К';
    });
    echo implode(', ', $filteredCities) . '<br>';
}
```

**6.**
```php
<?php
function translit($str) {
    $letters = array(
        'а' => 'a',
        'б' => 'b',
        'в' => 'v',
        'г' => 'g',
        'д' => 'd',
        'е' => 'e',
        'ё' => 'e',
        'ж' => 'zh',
        'з' => 'z',
        'и' => 'i',
        'й' => 'y',
        'к' => 'k',
        'л' => 'l',
        'м' => 'm',
        'н' => 'n',
        'о' => 'o',
        'п' => 'p',
        'р' => 'r',
        'с' => 's',
        'т' => 't',
        'у' => 'u',
        'ф' => 'f',
        'х' => 'h',
        'ц' => 'c',
        'ч' => 'ch',
        'ш' => 'sh',
        'щ' => 'sch',
        'ь' => '',
        'ы' => 'y',
        'ъ' => '',
        'э' => 'e',
        'ю' => 'yu',
        'я' => 'ya'
    );
    $transliteratedStr = '';

    for($i = 0; $i < mb_strlen($str); $i++){
        $letter = mb_substr($str, $i, 1);
        $transliteratedLetter = $letters[mb_strtolower($letter)];
        if(!$transliteratedLetter) {
            $transliteratedLetter = $letter;
        }
        if(mb_strtoupper($letter) === $letter) {
           $transliteratedLetter = ucfirst($transliteratedLetter);
        }
        $transliteratedStr .= $transliteratedLetter;
    }
    return $transliteratedStr;
}
```

**7.**
```php
<?php
function replaceSpaces($str) {
    $newStr = '';
    for($i = 0; $i < mb_strlen($str); $i++) {
        $symbol = mb_substr($str, $i, 1);
        if($symbol === ' ') {
            $symbol = '_';
        }
        $newStr .= $symbol;
    }
    return $newStr;
}
```

**8.**
```php
<?php
function translit($str) {
    $letters = array(
        'а' => 'a',
        'б' => 'b',
        'в' => 'v',
        'г' => 'g',
        'д' => 'd',
        'е' => 'e',
        'ё' => 'e',
        'ж' => 'zh',
        'з' => 'z',
        'и' => 'i',
        'й' => 'y',
        'к' => 'k',
        'л' => 'l',
        'м' => 'm',
        'н' => 'n',
        'о' => 'o',
        'п' => 'p',
        'р' => 'r',
        'с' => 's',
        'т' => 't',
        'у' => 'u',
        'ф' => 'f',
        'х' => 'h',
        'ц' => 'c',
        'ч' => 'ch',
        'ш' => 'sh',
        'щ' => 'sch',
        'ь' => '',
        'ы' => 'y',
        'ъ' => '',
        'э' => 'e',
        'ю' => 'yu',
        'я' => 'ya'
    );
    $transliteratedStr = '';

    for($i = 0; $i < mb_strlen($str); $i++){
        $symbol = mb_substr($str, $i, 1);
        $transliteratedLetter = $letters[mb_strtolower($symbol)];
        if($symbol === ' ') {
            $symbol = '_';
        }
        if(!$transliteratedLetter) {
            $transliteratedLetter = $symbol;
        }
        if(mb_strtoupper($symbol) === $symbol) {
            $transliteratedLetter = ucfirst($transliteratedLetter);
        }
        $transliteratedStr .= $transliteratedLetter;
    }
    return $transliteratedStr;
}
```

## Запросы HTTP, параметры URL и формы HTML
**1.** https://github.com/belyash23/internship/blob/main/php/4.1%20-%20calc.php

## Cookies и сессии PHP.
https://github.com/belyash23/internship/tree/main/php/5%20-%20sessions%20and%20cookies
