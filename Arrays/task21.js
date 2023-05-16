// Создать массив размера n, который одинаково читается как слева направо, так и справа налево. Можно использовать например подряд идущие числа, начиная с 0.
let array = [0];
let n = prompt("введите длину массива", 5);
for (let i = 1; i < n; i++) {
    if (i < n / 2) {
        array.push()
        array[i] = array[i - 1] + 1
    } else if (i >= n / 2) {
        array.push()
        array[i] = array[i - 1] - 1
    }
}
console.log(array);
