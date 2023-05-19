// Найдите количество вхождения 'aba' в строку.
const str = "aba - сокрашение от abalbisk";
let count = 0;
let pos = str.indexOf('aba');

while (pos !== -1) {
    count++;
    pos = str.indexOf('aba', pos + 1);
}
console.log(count);
