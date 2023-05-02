// Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка (тут надо будет  немного почитать про строки)
'use strict';
function repeat(str, n = 2) {
    return str.repeat(n);
}

console.log(repeat("")); 
