// Создать объект obj
// , с методами method1(),method2()
//  и method3()
// . В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3()
"use strict"
let obj = {
    method1() { return this },
    method2() { return this },
    method3() {
        console.log("метод3");
    }
}
obj.method1().method2().method3();