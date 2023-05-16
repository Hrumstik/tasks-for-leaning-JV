// 1. Написать функцию printDate(day, month, year, k), которая выводит дату в одном из указанных форматов.
//     1. при k = 0: dd.mm.yy
//     2. при k = 1: dd.mm.yyyy
//     3. при k = 2: yyyy/mm/dd

function printDate(day, month, year, k) {
    if (day < 10) { day = "0" + day };
    if (month < 10) { month = "0" + month };
    if (year < 100) { year = year + 1900 }
    switch (k) {
        case 0:
            year = year.toString();
            console.log(`${day}.${month}.${year.slice(2)}`);
            break;
        case 1:
            console.log(`${day}.${month}.${year}`);
            break;
        case 2:
            console.log(`${year}/${month}/${day}`)
            break;
    }

}

printDate(8, 9, 97, 0);
