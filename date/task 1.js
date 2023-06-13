// Написать функцию isWeekend , которая будет принимать day (1-31), month (1-12) и year (1-3000) и возвращать true / false в зависимости от того является дата соответствующая этим аргументам выходным или нет
function isWeekend(day, month, year) {
    let date = new Date();
    date.setDate(day);
    date.setMonth(month - 1)
    date.setFullYear(year)
    if (date.getDay() == 0 || date.getDay() == 6) {
        return true
    } else { return false }
}
console.log(isWeekend(28, 05, 2023))