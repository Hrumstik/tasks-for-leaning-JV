// Удалите в строке все буквы 'x'. за которыми следует 'abc'.
const str = "abc2 это почти тоже самое, что и abc1, но не abc";
let newStr;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" && str[i + 1] == "b" && str[i + 2] == "c" && str[i + 3] == "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9") {
        newStr = str.replace("abc", "")
    }
}
console.log(newStr)