// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
let array = [2, 3, -3, -4, 5, -1];
let positiveArray = array.filter(item => item > 0)
alert(positiveArray);
let result = positiveArray.reduce((sum, item) => { return sum + item });
alert(result);