// Написать функцию которая выводит дату конца недели по заданной дате. И входная и выходная даты - в формате "dd/mm/yyyy" 
let getTheEndOfTheWeekend = (str) => {
    let dd = str.slice(0, 2);
    let mm = str.slice(3, 5);
    let yyyy = str.slice(6)
    let date = new Date();
    date.setDate(dd);
    date.setMonth(mm - 1);
    date.setFullYear(yyyy);
    for (let i = 0; date.getDay() !== 0; i++) {
        date.setDate(date.getDate() + 1)
    }
    return date
}

console.log(getTheBeginngOfTheWeekend("12/06/2023"))
