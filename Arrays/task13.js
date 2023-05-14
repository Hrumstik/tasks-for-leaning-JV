// Создать массив размера n, заполнить его последовательными нечетными числами, начиная с единицы.
let array = [];
array.unshift(1);
let n = prompt("Введите n", 5);
for (let i = 1; i < n; i++) {
    array.push();
    array[i] = array[i - 1] + 2;
}
console.log(array)