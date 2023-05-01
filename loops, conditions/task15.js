// Выведите в консоль count элементов арифметической прогрессии с началом в currentNumber  и шагом step.

let currentNumber = +prompt("Введите стартовое число", 1);
let step = +prompt("Введите число-шаг", 2);
let count = +prompt("Введите count")

for (let i = 1; i <= count; i++) {
    currentNumber = currentNumber + step;
    console.log(currentNumber);
}