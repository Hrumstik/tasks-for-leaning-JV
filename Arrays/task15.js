// Сформировать возрастающий массив из четных чисел размера n.
let array = [];
array.push(0);
let n = prompt("введите размер массива")
for (let i = 1; i < n; i++) {
    array.push();
    array[i] = array[i - 1] + 2;
}
console.log(array)