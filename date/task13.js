// Написать функцию, которая принимает month (1-12) и year (1-3000) и выводит в консоль календарь на этот месяц в виде как на картинке снизу.
getCalendar = (month, year) => {
    let date = new Date();
    date.setDate(1);
    date.setMonth(month - 1);
    date.getFullYear(year)

    const secondStr = 'пн | вт | ср | чт | пт | сб | вс'

    let monthStr;
    switch (date.getMonth()) {
        case 0:
            monthStr = "Январь"
            break;

        case 1:
            monthStr = "Февраль"
            break;

        case 2:
            monthStr = "Март"
            break;

        case 3:
            monthStr = "Апрель"
            break;

        case 4:
            monthStr = "Май"
            break;

        case 5:
            monthStr = "Июнь"
            break;

        case 6:
            monthStr = "Июль"
            break;

        case 7:
            monthStr = "Август"
            break;

        case 8:
            monthStr = "Сентябрь"
            break;

        case 9:
            monthStr = "Октябрь"
            break;

        case 10:
            monthStr = "ноябрь"
            break;

        case 11:
            monthStr = "декабрь"
            break;
    }
    let firstStr = `${monthStr} ${date.getFullYear()}`;
    for (let i = firstStr.length; i <= secondStr.length; i = i + 2) {
        firstStr = "-" + firstStr + "-"
    }
    let thirdStr;
    switch (date.getDay()) {
        case 1:
            thirdStr = ''
            break;

        case 2:
            thirdStr = '   |'
            break;

        case 3:
            thirdStr = '   |    |'
            break;

        case 4:
            thirdStr = '   |    |    |'
            break;

        case 5:
            thirdStr = '   |    |    |    |'
            break;

        case 6:
            thirdStr = '   |    |    |    |    |'
            break;

        case 0:
            thirdStr = '   |    |    |    |    |    |'
            break;
    }
    let getAmounfOfDaysInMonth = () => {
        date.setMonth(date.getMonth() + 1)
        let amounfOfDays = date.getDate(date.setDate(date.getDate() - 1))
        return amounfOfDays
    }

    const daysAmount = getAmounfOfDaysInMonth()

    for (let i = 1; i <= daysAmount; i++) {
        date.setDate(i)
        if (i < 10 && date.getDay() == 1) { thirdStr += ` ${i} |` }
        else if (i < 10 && date.getDay() == 0) { thirdStr += `  ${i}\n` }
        else if (i < 10) { thirdStr += `  ${i} |` }
        else if (i >= 10 && date.getDay() == 1) { thirdStr += `${i} |` }
        else if (i >= 10 && date.getDay() == 0) { thirdStr += ` ${i}\n` }
        else if (i >= 10) { thirdStr += ` ${i} |` }
    }

    console.log(firstStr)
    console.log(secondStr)
    console.log(thirdStr)
}
getCalendar(6, 2023)