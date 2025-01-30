// alert( null || 2 || undefined ); вывод 2 так как оператор или выводит true если оно есть в выражении
// alert( alert(1) || 2 || alert(3) ) вывод 2
// alert( 1 && null && 2 ); ответ null  оператор и выводит первый false из с списка
// alert( null || 2 && 3 || 4 ); ответ 3

// let = (age<=14 && age>=90);
// let =(!(age<=14 && age>=90));
// let = (age<14 || age>90);


// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
// Первый и третий alert выполнится.

let admin = prompt("Кто там?");
if (admin != "Админ") {
    alert("Я вас не знаю!");
} else if (admin = "Админ") {
    let password = prompt("Пароль");
    if (password != "Я главный") {
        alert("Неверный пароль!");
    } else if (password = "Я главный")
        alert("Здравствуйте!")
}
