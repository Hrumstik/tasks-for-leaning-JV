// 13. Дана строка. Заменить каждый четный символ или на 'a', если символ не равен 'a' или 'b', или на 'c' в противном случае.
let str = "taest b string";
console.log(str.length);
let newStr = "";
for (let i = 0; i < str.length; i++) {

    if (i % 2 == 0 && str[i] !== "a" && str[i] != "b") { newStr = newStr + "a" }
    else if (i % 2 == 1 && str[i] !== "a" && str[i] != "b") { newStr = newStr + "c" }
    else if (str[i] == "a" || str[i] == "b") { newStr = newStr + str[i] }
}
console.log(newStr);
console.log(newStr.length);
