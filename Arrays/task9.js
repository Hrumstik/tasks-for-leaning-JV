// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
for (let i = 0; i < week.length; i++) {
    if (i == 5 || i == 6) { document.write(`<b>${week[i]}</b> <br>`) }
    else document.write(`${week[i]} <br>`);

}