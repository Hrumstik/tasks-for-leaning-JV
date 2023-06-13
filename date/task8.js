// Написать функцию, которая будет выводить вчерашний день недели
let giveMeYesteray = () => {
    let today = new Date();
    today.setDate(today.getDate() - 1)
    let day = today.getDay();
    switch (day) {
        case 0:
            return "воскресенье"
            break;
        case 1:
            return "понедельник"
            break;
        case 2:
            return "вторник"
            break;
        case 3:
            return "среда"
            break;
        case 4:
            return "четверг"
            break;
        case 5:
            return "пятница"
            break;
        case 6:
            return "суббота"
            break;
    }
}

console.log(giveMeYesteray())