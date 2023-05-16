// Пользователь вводит количество лет, сумму вклада в банк и годовой процент. С использованием циклов найдите сумму вклада через введенное количество лет для двух способов начисления процентов - с капитализацией и без
// let years = +prompt("Введите количество лет", 3);
// let deposit = +prompt("Введите сумму вклада в банка", 100);
// let annualPercentage = +prompt("Введите годовой процент", 10);
// for (let i = 1; i <= years; i++) {
//     deposit = (deposit * annualPercentage / 100) + deposit;
//     console.log(deposit);
// }
// С капитализацией

let years = +prompt("Введите количество лет", 3);
let deposit = +prompt("Введите сумму вклада в банка", 100);
let annualPercentage = +prompt("Введите годовой процент", 10);
annualInterest = deposit * annualPercentage / 100;
for (let i = 1; i <= years; i++) {
    deposit = (deposit + annualInterest);
    console.log(deposit);
}

// Без капитализации