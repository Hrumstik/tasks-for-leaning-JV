// 20. Даны катеты прямоугольного треугольника. Найдите площадь, периметр и гипотенузу треугольника.

let leg1 = prompt("write the first leg of rectangle", 0);
let leg2 = prompt("write the second leg of rectangle", 0);
let hypotenuse = ((leg1 ** 2) + (leg2 ** 2)) ** (1 / 2);
let perimeter = +leg1 + +leg2 + +hypotenuse;
let S = (leg1 * leg2) / 2;
alert("the square of rectangle is " + S);
alert("the hypotenuse of rectangle is " + hypotenuse);
alert("the perimeter of rectangle is " + perimeter);

