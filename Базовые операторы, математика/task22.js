// 22. Известно, что x кг конфет стоит a рублей. Определите, сколько стоит y кг этих конфет, а также сколько кг конфет можно купить на k рублей. Все значения вводит пользователь.
let x_kilo = prompt("write the number of kilogrames ", 0);
let a_rubles = prompt("write the price ", 0);
let y_kilo = prompt("write the number of kilogrames ", 0);
let y_rubles = y_kilo * a_rubles / x_kilo;
alert("the price will be " + y_rubles + " rubles");
let k_rubes = prompt("write the price ", 0);
let k_kilo = k_rubes * x_kilo / a_rubles;
alert(`you can buy ${k_kilo} kilo`);
