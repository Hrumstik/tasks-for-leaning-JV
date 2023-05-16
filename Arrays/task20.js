// Создать массив, состоящий из троек подряд идущих одинаковых элементов. Элементы - числа 1, 2, 3 и тд
let array = [1];
let n = prompt("введите длину массива")
for (let i = 1; i < n; i++) {
    array.push(array[i - 1])
    if (i % 3 === 0) array[i] = array[i - 1] + 1
}

console.log(array)





















// const createArray = (n, repeatNum = 3) => {
//     const myArray = [];
//     let num = 1;

//     while (myArray.length < n) {
//         myArray.push(num);
//         if (myArray.length % repeatNum === 0) ++num;
//     }

//     return myArray;
// }

// const createdArray = createArray(9);

// console.log(createdArray);