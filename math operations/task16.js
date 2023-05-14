// 16. Пользователь вводит три числа. Найдите среднее арифметическое этих чисел, а также разность удвоенной суммы первого и третьего чисел и утроенного второго числа.

let a = +prompt("write the first number");
let b = +prompt("write the second number");
let c = +prompt("write the third number");
let d = ((a + b + c) / 3);
alert("the arithmetic mean of these numbers is " + d);
let e = ((a + c) * 2) - (b * 3);
alert("result is " + e);