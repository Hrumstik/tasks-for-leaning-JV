// Написать функцию isWeekend , которая будет принимать day (1-31), month (1-12) и year (1-3000) и возвращать true / false в зависимости от того является дата соответствующая этим аргументам выходным или нет
function getDay() {
    date = new Date();
    switch (date.getDay()) {
        case 0:
            return ("воскресенье")
            break;
        case 1:
            return ("понедельник")
            break;
        case 2:
            return ("вторник")
            break;
        case 3:
            return ("среда")
            break;
        case 4:
            return ("четверг")
            break;
        case 5:
            return ("пятница")
            break;
        case 6:
            return ("суббота")
            break;
    }
}
console.log(getDay())