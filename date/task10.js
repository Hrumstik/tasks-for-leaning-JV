// Написать функцию которая выводит количество дней, прошедших с начала года
let getDays = () => {
    const now = new Date();
    const beginningOfTheYear = new Date();
    beginningOfTheYear.setDate(1);
    beginningOfTheYear.setMonth(0);
    return Math.floor((now - beginningOfTheYear) / 24 / 3600 / 1000)
}

console.log(getDays())

