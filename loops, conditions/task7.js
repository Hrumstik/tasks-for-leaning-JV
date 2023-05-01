// Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, который в зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)
// var n = 5;
// switch( n ){
//  //Напишите тут свой код
// }

let n = +prompt("Введите целое число от 0 до 9", 0);
switch (n) {
    case 0:
        alert('Ноль');
        break;
    case 1:
        alert('Один');
        break;
    case 2:
        alert('Два');
        break;
    case 3:
        alert('Три');
        break;
    case 4:
        alert('Четыре');
        break;
    case 5:
        alert('Пять');
        break;
    case 6:
        alert('Шесть');
        break;
    case 7:
        alert('Семь');
        break;
    case 8:
        alert('Восемь');
        break;
    case 9:
        alert('Девять');
        break;
    default:
        alert("Нет таких значений");
}