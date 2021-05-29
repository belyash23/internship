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
