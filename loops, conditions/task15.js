// Выведите в консоль count элементов арифметической прогрессии с началом в start и шагом step.

let start = +prompt("Введите стартовое число", 1);
let step = +prompt("Введите число-шаг", 2);

for (let count = start; start <= 1000; start++) {
    count = count + step;
    console.log(count);
}