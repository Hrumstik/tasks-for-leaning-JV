// Создать массив, каждый элемент которого равен квадрату своего номера.
let array = [];
let n = +prompt("введите величину массива", "n");
array.length = n;
for (let i = 0; i < n; i++) {
    array[i] = Math.pow(i, 2);
}
console.log(array);