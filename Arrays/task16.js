// Сформировать убывающий массив размера n из чисел, которые делятся на 3.  Последним числом в массиве должно быть 3. 
let array = [];
let n = prompt("ввидете размер массива", 5);
array.length = n - 1;
array.push(3);
for (let i = (n - 2); i >= 0; i--) {
    array[i] = array[i + 1] + 3;
}
console.log(array);
