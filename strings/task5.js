// Дана строка. Показать номера символов, совпадающих с последним символом строки.
const str = "Тестовая строка для теста т";
const letter = str.at(-1);
for (i = 0; i < str.length; i++) {
    if (str[i] == letter) {
        console.log(i)
    }
}