// первое задание.
let num1 = prompt("Number1");
let num2 = prompt("Namber2");
console.log(+num1 + +num2);
// Второй вариант.
let num3 = +prompt("Number1");
let num4 = +prompt("Namber2");
console.log(num1 + num2);
// Второе задание.
let num = 6.35;
alert(Math.round(6.35 * 100) / 100);
// Третье задание,я сам братан написал хахахах промто пришлось вспомнить про циклы.
let readNumber = +prompt("Enter number");
let number = 40;
while (readNumber < number) {
    if (!readNumber) break;
    readNumber = +prompt("Enter number");
};
alert(readNumber);

