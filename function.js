// function greeting(name, surname, age) {
//     return ("Привет" + name + surname + "с возрастом" + age + "лет")
// }
// console.log(greeting("Петя", "Петров", 20));


// let a = 2;
// let b = 2;
// function age() {

//     if (a % 2 === 0 && b % 2 === 0) {
//         return a * b
//     } else if (a % 2 !== 0 && b % 2 !== 0) {
//         return a + b
//     } else if (a % 2 !== 0 || b % 2 !== 0 && a % 2 === 0 && b % 2 === 0) {
//         return a
//     } else {
//         return b
//     }
// }

// console.log(age());

// let arr = [2, 8, 4];
// function array() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             return true
//         } else {
//             return false
//         }
//     }
// }
// console.log(array());

// let arr = [9, 20, 8, 15];
// function array() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 5 == 0) {
//             console.log([arr[i]]);
//         }
//     }
// }
// array();

// let map = new Map([
//     [1, "Monday"],
//     [2, "Tuesday"],
//     [3, "Wednesday"],
//     [4, "Thursday"],
//     [5, "Friday"],
//     [6, "Saturday"],
//     [7, "Sunday"]
// ])
// function weekday(num) {
//     let weekdays = map;
//     if (num >= 1 && num <= 7) {
//         return weekdays.get(num)
//     } else {
//         return "Incorrect value"
//     }

// }
// console.log(weekday(20));


// let randomLoc = Math.floor(Math.random() * 5);
// let location1 = randomLoc;
// let location2 = location1 + 1;
// let location3 = location2 + 1;
// let guess;
// let hits = 0;
// let guesses = 0;
// let isSunk = false;
// while (isSunk == false) {
//     guess = prompt("Введите координаты");
//     if (guess < 0 || guess > 6) {
//         alert("Введите правильное число")
//     } else {
//         guesses = guesses + 1;
//         if (guess == location1 || guess == location2 || guess == location3) {
//             alert("hit")
//             hits = hits + 1;

//             if (hits == 3) {
//                 isSunk = true;
//                 alert("Корабль потоплен")
//             }
//         } else {
//             alert("miss")
//         }
//     }
// }
// var dogName = "rover";
// var dogWeight = 23;
// if (dogWeight > 20) {
//     console.Log(dogName + " says WOOF WOOF");
// } else
//     console.log(dogName + " says woof woof");

// dogName = "spot";
// dogweight = 13;
// if (dogWeight > 20) {
//     console.Log(dogName + " says WOOF WOOF");
// } else
//     console.log(dogName + " says woof woof");

// dogName = "spike";
// dogWeight = 53;
// if (dogWeight > 20) {
//     console.Log(dogName + " says WOOF WOOF");
// } else
//     console.log(dogName + " says woof woof");
// dogName = "lady";
// dogWeight = 17;
// if (dogWeight > 20) {
//     console.Log(dogName + " says WOOF WOOF");
// } else
//     console.log(dogName + " says woof woof");

// function compare(dogName, dogWeight) {

//     if (dogWeight > 20) {
//         return (dogName + " says WOOF WOOF");
//     } else
//         return (dogName + " says woof woof");
// }
// console.log(compare("Alise", 24));
