// Создать массив размера n, заполнить его нулями и единицами, при этом данные значения чередуются, начиная с нуля.
let array = [];
array.unshift(0)
let n = prompt("введите n", 5);
for (let i = 0; i < n; i++) {
    if (array[i - 1] == 0) array.push(1);
    else if (array[i - 1] == 1) array.push(0);
}
console.log(array)