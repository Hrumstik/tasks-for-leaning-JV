// Удалите в строке все буквы 'x'. за которыми следует 'abc'.
const str = "abc - худший из худших майонезов в этом худшем мире";
let newStr;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" && str[i + 1] == "b" && str[i + 2] == "c") { newStr = str.replaceAll("х", "") }
}
console.log(newStr)