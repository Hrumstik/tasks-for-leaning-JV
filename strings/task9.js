// Даны две строки. Вывести большую по длине строку столько раз, на сколько символов отличаются строки.
const str1 = "Тестовая строка"
const str2 = "Тестовая строка?!";
let str3 = "";
for (let i = str1.length; i <= str2.length; i++) {
    str3 = str3 + str2;
}
console.log(str3);