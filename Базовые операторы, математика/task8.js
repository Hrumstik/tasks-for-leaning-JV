// (*) Даны размер ипотечного кредита (S — 2 млн.руб), процентная ставка (p  — 10%), кол-во лет (years — 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной perepl.

let S = 2000000;
let p = (10 / 100);
let monthly_p = p / 12;
let years = 5;
let months = years * 12;
// let monthly_payment = S * (monthly_p + monthly_p / (((1 + monthly_p) ** months) - 1))
let monthly_payment = S * (monthly_p / (1 - (1 + monthly_p) ** -months));
let perepl = monthly_payment * months - S;
alert(perepl + ' рублей');