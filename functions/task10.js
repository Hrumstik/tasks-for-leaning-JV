// Напишите функцию operation(m,n,o)
// , в которой m и n — числовые переменные, а o —  это название операции, которую над этими числами нужно произвести (”add”, “substract”, “multiply”, “divide”). Функция должна возвращать результат операции над этими переменными
function operation(m, n, o) {
    if (o == "add") {
        return m + n;

    } else if (o == "substract") {
        return m - n;

    } else if (o == "multiply") {
        return m * n;

    } else if (o == "divide") {
        return m / n;
    }
}

console.log(operation(6, 3, "add"))
console.log(operation(6, 3, "substract"))
console.log(operation(6, 3, "multiply"))
console.log(operation(6, 3, "divide"))