// Сформировать строку из 10 символов. На четных позициях должны находится четные цифры, на нечетных позициях - буквы.
const str = "Тестовая строка!"
let newStr = "";
for (i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        newStr = newStr + i;
    }
    else if (i % 2 == 1) {
        newStr = newStr + str[i];
    }
}
console.log(newStr);