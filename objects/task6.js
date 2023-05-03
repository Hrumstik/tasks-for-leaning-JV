// Создайте методы exportStr()
//  у каждого из объектов. Этот метод должен возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями.
let city1 = {};
city1.name = "ГородN";
city1.population = "10 млн";
let city2 = {
    name: "ГородM",
    population: 1e6,
}
function exportStr() {
    return `name=${this.name}\npopulation=${this.population}\n`
}
city1.exportStr = exportStr;
city2.exportStr = exportStr;
