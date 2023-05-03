// Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов
let city1 = {};
city1.name = "ГородN";
city1.population = "10 млн";
let city2 = {
    name: "ГородM",
    population: 1e6,
}
function getName() {
    return this.name;
}
city1.getName = getName;
city2.getName = getName;