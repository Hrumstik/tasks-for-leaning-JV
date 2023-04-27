/*15. Пользователь вводит три числа. Увеличьте первое число в два раза, второе числа уменьшите на 3, третье число возведите в квадрат и затем найдите сумму новых трех чисел.*/

let a = prompt("write the first number", "0");
let b = prompt("write the second number", "0");
let c = prompt("write the third number", "0");
let y = (a * 2) + (b - 3) + (c ** 2);
alert("result is " + y);