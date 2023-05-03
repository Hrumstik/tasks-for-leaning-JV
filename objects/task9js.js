// Добавить объекту из предыдущей задачи методы getEntrance и getFloor, которые в качестве аргумента будут принимать номер квартиры и будут возвращать  номер подъезда и этажа соответственно, в
// котором находится указанная квартира. 
let apartmentBuilding = {
    "numberOfStoreys": 25,
    "numberOfEntrances": 10,
    "numberOfApartmentsOnTheLanding": 20,
    getEntrance() {
        let store = prompt("Введите номер квартиры");
        let Entrances = Math.ceil(10 * store / 500);
        alert(`Ваша квартира находится в ${Entrances} подъезде`)
    },
    getFloor() {
        let store = prompt("Введите номер квартиры");
        let Floor = Math.ceil(25 * store / 500);
        alert(`Ваша квартира находится на ${Floor} этаже`)
    }
}
apartmentBuilding.getEntrance();
apartmentBuilding.getFloor();
