// Дана строка. Определите общее количество символов '+' и '-' в ней. А так же сколько таких символов, после которых следует цифра ноль.
const str = "5+1+4-1+ 1 = 10 + 1 = 11 -10";
let amount = 0;
let nullAmount = 0;
for (i = 0; i < str.length; i++) {
    if (str[i] == "+" || str[i] == "-") amount++
    if (str[i] == "0" && str[i + 1] !== undefined) nullAmount++
}
console.log(amount);
console.log(nullAmount);