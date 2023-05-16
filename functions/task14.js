// 3. Функция sequence(start, step) при вызове возвращает функцию-генератор. Каждый вызов генератора возвращает новое число в числовой последовательности. start – стартовое число (по умолчанию 0). step – шаг приращения (по умолчанию 1). Пример работы:

// `var generator = sequence(10, 3); alert(generator()); // 10 alert(generator()); // 13 alert(generator()); // 16`


function sequence(start = 0, step = 1) {
    let result = start;
    return function () {
        result = result + step;
        return result;
    }
}

let generator = sequence(10, 3);
console.log(generator());
console.log(generator());
console.log(generator());