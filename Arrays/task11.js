// Создать массив размера n, заполнить его нулями, кроме первого и последнего элементов, которые должны быть равны единице.
let n = prompt("Введите n", 4);
let array = []
for (let i = 0; i < (n - 2); i++) {
    array.unshift(0);
}
array.unshift(1);
array.push(1);
console.log(array);