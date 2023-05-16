// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let array = [10, 20, 30, 50, 235, 3000];
let newArray = array.map((item) => item.toString(10));
for (key of newArray) {
    if (key.slice(0, 1) == 1 || key.slice(0, 1) == 2 || key.slice(0, 1) == 5) console.log(Number(key))
}
