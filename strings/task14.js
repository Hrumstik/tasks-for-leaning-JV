const str = "100 рублей";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] == "0" || str[i] == "1" || str[i] == "3" || str[i] == "4" || str[i] == "5" || str[i] == "6" || str[i] == "7" || str[i] == "8" || str[i] == "9") count++
}
console.log(count)