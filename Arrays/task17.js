// Создать массив из n первых чисел Фибоначчи.
let array = [];
array[0] = 0;
array[1] = 1
let n = prompt("введите количество выводимых чисел Фибоначи");
for (let i = 2; i < n; i++) {
    array.push
    array[i] = array[i - 2] + array[i - 1];
}
console.log(array);