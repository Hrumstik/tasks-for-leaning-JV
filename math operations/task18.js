// 18. Пользователь вводит цены 1 кг конфет и 1 кг печенья. Найдите стоимость: а) одной покупки из 300 г конфет и 400 г печенья; б) трех покупок, каждая из 2 кг печенья и 1 кг 800 г конфет.
let candy_price = prompt("write the price of candies for 1 kilo", 0);
let cookie_price = prompt("write the price of cookie for 1 kilo", 0);
let first_purchase = (candy_price * 0.3) + (cookie_price * 0.4);
alert("first purchase cost is " + first_purchase);
let second_purchase = ((candy_price * 2) + (cookie_price * 1.8)) * 3;
alert("second purchase cost is " + second_purchase);