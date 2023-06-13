// Написать функцию, которая принимает startDate и endDate в формате "yyyy-mm-dd" и возвращает количество рабочих дней между этими двумя датами
getBusinessDays = (startDate, endDate) => {
    const firstDate = new Date(Date.parse(startDate));
    const secondDate = new Date(Date.parse(endDate));
    let currentDate = firstDate;
    let daysCounter = 0;
    for (let i = 1; i < 10; i++) {
        if ((currentDate.getDay()) == 0 || (currentDate.getDay()) == 6) {
            currentDate.setDate(currentDate.getDate() + 1)
            continue
        } else { daysCounter++ }
        if (+currentDate == +secondDate) { break }
        currentDate.setDate(currentDate.getDate() + 1)
    }
    return daysCounter
}

console.log(getBusinessDays("2023-06-01", "2023-06-09"))