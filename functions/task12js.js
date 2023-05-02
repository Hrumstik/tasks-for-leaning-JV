// 1. Написать функцию printDate(day, month, year, k), которая выводит дату в одном из указанных форматов.
//     1. при k = 0: dd.mm.yy
//     2. при k = 1: dd.mm.yyyy
//     3. при k = 2: yyyy/mm/dd

function printDate(day, month, year, k) {
    if (k == 0) {
        console.log(`${day}.${month}.${year.slice(2)}`)

    } else if (k == 1) {
        console.log(`${day}.${month}.${year}`)

    } else if (k == 2) {
        console.log(`${year}/${month}/${day}`)
    }
}

printDate("08", "09", "1998", 2);

// Есть у меня чуйка, что буду переделывать задание :D