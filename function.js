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

let map = new Map([
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"],
    [7, "Sunday"]
])
function weekday(num) {
    let weekdays = map;
    if (num >= 1 && num <= 7) {
        return weekdays.get(num)
    } else {
        return "Incorrect value"
    }

}
console.log(weekday(20));
