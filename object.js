// let user = {}
// user.name = "John",
//     user.surname = "Smith"
// user.name = "Pete"
// delete user.name

// function isEmpty(obj) {
//     for (key in obj) {
//         return false
//     }
//     return true
// }
// console.log(isEmpty("pop"));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// sum = 0;
// for (key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum);

// let calculator = {
//     read() {
//         this.a = +prompt("Введите число");
//         this.b = +prompt("Введите число");
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//         return this.step++;
//     },
//     down() {
//         return this.step--;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         console.log(this.step);
//     }
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.down();
// ladder.showStep();


// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//      this.num = +prompt("Введите число");
//       this.value += this.num


//     };
// };

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

// function Calculator() {


//     this.read = function () {
//         this.a = +prompt("Введите число");
//         this.b = +prompt("Введите число");
//     },
//         this.sum = function () {
//             return this.a + this.b
//         },
//         this.mul = function () {
//             return this.a * this.b
//         }
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());