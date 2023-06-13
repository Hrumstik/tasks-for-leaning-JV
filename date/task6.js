// Напишите функцию которая выведет время в формате "hh:mm:ss" для момента времени на x минут опережающего текущий момент времени
let calcTime = (plusMin) => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + plusMin)
    let hh = now.getHours()
    let mm = now.getMinutes()
    let ss = now.getSeconds()
    if (hh < 10) { hh = '0' + hh }
    if (mm < 10) { mm = '0' + mm }
    if (ss < 10) { ss = '0' + ss }
    return `${hh}:${mm}:${ss}`
}
console.log(calcTime(2))