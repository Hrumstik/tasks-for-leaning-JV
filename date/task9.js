// Напишите функцию для расчета возраста по данному дню рождения в формате “dd.mm.yyyy”
getMyAge = (str) => {
    let day = +str.slice(0, 2)
    let month = +str.slice(3, 5)
    let year = +str.slice(6)
    let birthDay = new Date();
    let now = new Date()
    birthDay.setFullYear(year);
    birthDay.setMonth(month);
    birthDay.setDate(day)
    let age = Math.floor((now - birthDay) / 24 / 3600 / 1000 / 365)
    return age
}

console.log(getMyAge('08.09.1997'))