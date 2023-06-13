// Напишите функцию, чтобы получить количество дней в месяце (функция принимает  month (1-12) и year (1-3000)  )
let getAmounfOfDaysInMonth = (month, year) => {
    let date = new Date()
    date.setFullYear(year)
    date.setMonth(month - 1)
    date.setMonth(date.getMonth() + 1)
    date.setDate(1)
    let amounfOfDays = date.getDate(date.setDate(date.getDate() - 1))
    if (month < 1 || month > 12 || year < 1 || year > 3000) { return 'Параметры функции указаны неверно' }
    return amounfOfDays
}

console.log(getAmounfOfDaysInMonth(6, 2023))