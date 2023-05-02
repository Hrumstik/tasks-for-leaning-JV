// Напишите функцию с именем square(n,c), которая выводит на экран (с помощью console.log) квадрат размера n на n, заполненный символами c. Например:
function square(n, c) {
    for (let i = 0; i < n; i++) {
        document.write(c.repeat(n), "<br>")

    }
}
square(50, "#");