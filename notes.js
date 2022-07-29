
// Можно взяв из localStorage преобразовать строчку в численый тип.

// Положить значение по ключу "myNumber"

localStorage.setItem("myNumber","111");
// Получить с использование парсинга можно так

var number = parseInt(localStorage.getItem("myNumber"));
// или синтаксис покороче

var number = +localStorage.getItem("myNumber");
// достаточно распространённая ситуация хранения в localStorage комплексных объектов
//создадим объект
var obj = {
    item1: 1,
    item2: [123, "two", 3.0],
    item3:"hello"
};

var serialObj = JSON.stringify(obj); //сериализуем его в строчку

localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"

var returnObj = JSON.parse(localStorage.getItem("myKey")) //спарсим его обратно объект