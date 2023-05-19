// Дана строка. Вывести первые три символа и последние три символа, если длина строки больше 5. Иначе вывести первый символ столько раз, какова длина строки.
let str = "Тестовая строка!";
if (str.length > 5) {
    console.log(str.slice(0, 3));
    console.log(str.slice(13));
}
else {
    for (i = 0; i < str.length; i++) {
        console.log(str.at(0));
    }
}
