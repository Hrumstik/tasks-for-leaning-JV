// Дана строка. Если она начинается на 'abc', то заменить их на 'www', иначе добавить в конец строки 'zzz'.
let str = "abc - лучший майонез";
if (str.startsWith("abc")) { str = "zzz" + str.slice(4) };
if (!str.startsWith("abc")) { str = str + "zzz" };
console.log(str);