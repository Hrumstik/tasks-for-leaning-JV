// Написать функцию, которая будет показывать сколько дней осталось до твоего дня рождения (день рождения - аргумент функции, в формате “dd.mm.yyyy”)
function getDaysUntillBirthday(day, month, year) {
    const birthday = new Date();
    birthday.setDate(day);
    birthday.setMonth(month - 1);
    const today = new Date();
    birthday.setFullYear(((today.getTime() - birthday.getTime()) > 0) ? (today.getFullYear() + 1) : today.getFullYear());
    return ((birthday.getTime() - today.getTime()) / 24 / 3600 / 1000)
}
console.log(Math.round(getDaysUntillBirthday(21, 01, 1999)))