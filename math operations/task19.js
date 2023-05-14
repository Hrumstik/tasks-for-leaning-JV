// 19. Пользователь вводит время в минутах и расстояние в километрах. Найдите скорость в м/c.
let time = prompt("write the time in minutes", 0);
let distance = prompt("write distance in kilometers", 0);
speed = (distance * 1000) / (time * 60);
alert("the speed is " + speed);