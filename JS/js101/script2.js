// Modulus (Division Remaider)
// 5 / 2 = 2.5
// 5 % 2 = .5
// let coinChange = 13 % 5; // .33333333
// console.log(coinChange)

// let theScore;
// theScore = 0;
// theScore++
// theScore++
// theScore++
// theScore--
// console.log(theScore);
// let totalscore = 100;
// totalscore += theScore; // 102
// totalscore -= 5; // 97
// totalscore *= 2; // 194
// totalscore++ // 195
// totalscore /= 5; // 39
// console.log(totalscore); 

// const isTrue = true;
// const isFalse = false;
// console.log(isTrue == isFalse); // false
// console.log(isTrue != isFalse); // true
// console.log(isTrue !== isFalse); // true

// const five = 5;
// const alsoFive = 5;
// const ten = 10;
// console.log(five >= ten); // false
// console.log(five <= ten); // true
// console.log(five < alsoFive); // false
// console.log(five <= alsoFive); // true

const someUser = true;
const welcomeMessage = someUser ? "Welcome to our website": "Please login";
let wm2;
if (someUser) {
    wm2 = "Welcome to our website";
} else {
    wm2 = "Please login";
}
console.log(welcomeMessage);

// Array

// const myArray = ["Cody", "Matthew", "Zaphod"];

// const aStudent = myArray[0];

// myArray.pop();

// myArray.push("Yoda");

// myArray.shift();

// console.log(myArray);

// console.log(typeof myArray); 
// console.log(typeof aStudent);

// Objects

// const luke = {
//     firstName: "Luke",
//     lastName: "Skywalker",
//     occupation: "Jedi",
//     age: 24
// }
// console.log(luke);
// console.log(luke.firstName +luke.lastName + `is the best ${luke.occupation} in the galaxy!`);
// luke.teacher = "Yoda";
// console.log(luke);

// Function

// function greet(name) {
//     // your code goes here
//     // console.log(`Hello ${name}`);
//     return `Hello ${name}!`
// }

// const someJedi = greet("Luke");

// console.log(greet("Luke"));
// console.log(someJedi + "Yoda")

// function sum(x, y, z) {
//     return x + y + z;
// }

// const theSum = sum(10, 20, 12); // 42

// console.log(theSum);

// function multiply(x, y) {
//     return x * y;
// }

// const aResult = multiply(10, 10); // 100

// console.log(aResult);
// console.log(multiply(20, 20), multiply(10, 15), multiply(-10, -25));

// const luke = {
//     firstName: "Luke",
//     lastName: "Skywalker",
//     occupation: "Jedi",
//     age: 24,
//     greet: function() {
//         return this.firstName + " " + this.lastName
//     },
//     useForce: function() {
//         console.log("Use the force Luke!")
//     }
// }

// console.log (luke.greet());
// luke.useForce();

// Basic Loops

// const someArray = ["Ashleigh", "Eric", "Donte"];

for (let i = 0; i < someArray.length; i++) {
    console.log("Hello " + someArray[i]);
// }

let x = 0; 

while (x < 10) {
    console.log(`x is ${x}`);
    x++;
}