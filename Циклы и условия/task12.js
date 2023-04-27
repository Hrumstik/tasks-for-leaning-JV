// // Пользователь вводит количество лет, сумму вклада в банк и годовой процент. С использованием циклов найдите сумму вклада через введенное количество лет для двух способов начисления процентов - с капитализацией и без
// let years = +prompt("Введите количество лет", 1);
// let deposit = +prompt("Введите сумму вклада в банка", 100000);
// let annualPercentage = +prompt("Введите годовой процент", 8);
// for (let i = 1; i <= years; i++) {
//     deposit = deposit * (1 + annualPercentage / 100);
//     console.log(deposit);
// } /*с капитализацией */

let years = +prompt("Введите количество лет", 1);
let deposit = +prompt("Введите сумму вклада в банка", 100000);
let annualPercentage = +prompt("Введите годовой процент", 8);
let yearDeposit;
let depositAmount;
for (let i = 1; i <= years; i++) {
    yearDeposit = deposit * (1 + annualPercentage / 100);
    let annualInterest;
    annualInterest = yearDeposit - deposit;
    depositAmount = deposit + annualInterest * years;
    alert(depositAmount);
} /*с капитализацией */