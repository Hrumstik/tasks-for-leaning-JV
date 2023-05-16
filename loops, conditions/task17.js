// (*) В переменных size и unit хранятся размер и единицы измерения информации 120 и «Кб» соответственно. Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) и 1килобайт равен 1024 байта, найти количество байт в size.

let size = 120;
let unit = 'Кб';

switch (unit) {

    case unit = 'Кб':
        size = 1024 * size;
        alert(size + ' байт');
        break;

    case unit = 'Мб':
        size = size * 1024 * 1024;
        alert(size + ' байт');
        break;

    case unit = 'Гб':
        size = size * 1024 * 1024 * 1024;
        alert(size + ' байт');
        break;
}