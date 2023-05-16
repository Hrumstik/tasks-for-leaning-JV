// Добавить объекту из предыдущей задачи методы getEntrance и getFloor, которые в качестве аргумента будут принимать номер квартиры и будут возвращать  номер подъезда и этажа соответственно, в
// котором находится указанная квартира. 
let apartmentBuilding = {
    "numberOfFloors": 25,
    "numberOfEntrances": 10,
    "numberOfApartmentsOnTheLanding": 20,
    getEntrance(apartment) {
        let entrances = Math.ceil(apartment / (apartmentBuilding.numberOfFloors * apartmentBuilding.numberOfApartmentsOnTheLanding));
        return `Ваша квартира находится в ${entrances} подъезде`
    },
    getFloor(apartment) {
        let floor = Math.ceil(apartment * apartmentBuilding.numberOfApartmentsOnTheLanding / (apartmentBuilding.numberOfApartmentsOnTheLanding * apartmentBuilding.numberOfFloors));
        return `Ваша квартира находится на ${floor} этаже`
    },
}
console.log(apartmentBuilding.getEntrance(501));
console.log(apartmentBuilding.getFloor(126));
