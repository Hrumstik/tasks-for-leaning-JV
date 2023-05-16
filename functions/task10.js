// Напишите функцию operation(m,n,o)
// , в которой m и n — числовые переменные, а o —  это название операции, которую над этими числами нужно произвести (”add”, “substract”, “multiply”, “divide”). Функция должна возвращать результат операции над этими переменными
function operation(m, n, o) {
    switch (o) {
        case "add":
            return m + n;
            break;

        case "substract":
            return m - n;
            break;

        case "multiply":
            return m * n;
            break;

        case "divide":
            return m / n;
            break;
    }
}

console.log(operation(6, 3, "add"))
console.log(operation(6, 3, "substract"))
console.log(operation(6, 3, "multiply"))
console.log(operation(6, 3, "divide"))