// Написать функцию, которая принимает startDate и endDate в формате "yyyy-mm-dd" и возвращает количество дней между этими двумя датами
function getDate(startDate, endDate) {
    let start = new Date(Date.parse(startDate))
    let end = new Date(Date.parse(endDate))
    return Math.abs((start - end) / 24 / 3600 / 1000)
}

console.log(getDate("2023-05-30", "2023-06-01"))