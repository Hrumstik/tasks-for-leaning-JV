// Дана строка. Если ее длина больше 10, то оставить в строке только первые 6 символов, иначе дополнить строку символами 'o' до длины 12.
let str = "abc - ";
if (str.length > 10) { str = str.slice(0, 7) }
else {
    while (str.length < 12) {
        str = str + "o"
    }
}
console.log(str)