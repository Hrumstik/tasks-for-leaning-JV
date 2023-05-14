// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArray = array.map((item) => item.toString(10));
let str = "-";
for (let key of newArray) {
    str = str + key + "-";
}
console.log(str);
