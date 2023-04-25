//Declared Function
// function greet() {
//     return "Hello!"
// }

// greet();

// console.log(greet());

// function greetPerson(name) { //name is a parameter when you write a function, a placeholder ofr a value when you call it
//     return `Hello ${name}`;
// }

// greetPerson("No Name");

// console.log(greetPerson("Zaphod"));

// function greetPerson(aName) {
//     return "Hello a 2nd time " + aName;
// }

// const greetPersonArrow = (aName) => `Hello ${aName}!`;

// console.log(greetPerson("Luke"));

// const sumNums = function(n1, n2) {
//     return n1 + n2;
// }
// console.log(sumNums(2, 2)); 

// // Arrow Functions and Anon Functions

// const subtractNums = (n1, n2) => {
//     return n1 - n2;
// }
// function subNums(n1, n2) {
//     return n1 - n2;
// }

// console.log(subtractNums(10, 4)) //6

// const myArray = [1, 2, 3, 4, 5];

// const newArray = myArray.map((x => x * x));

// // map will return a new array of items after executing a callback function for each item.

// console.log(newArray);

// function ronsFunction(num1, otherNumber) {
//     let concat = num1 + otherNumber + "";
//     return concat;
// }

// let someNumber = "44"

// const result = ronsFunction(someNumber, 2);

// console.log(result) // 442

// console.log(ronsFunction("Hello", "World"));

// var area = function(width, height) {
//     return width * height;
// }
// var size = area(3, 4);

// console.log(size);

// const sumNums = (n1, n2) => n1 + n2;
// console.log(sumNums(5, 5));

//IIFE
//Instantly Invoked Function Expression

// (function () {
//     console.log("I was instantly invoked a a anon function");
// })()

// const labelForFunction = function() {
//     console.log("Hellow world!");
// }

// labelForFunction();

// const myArray = [1, 2, 3];
// const myStr = "Hello World!";

// function someFunction(x) {
//     console.log("The value of x is" + x);
//     x = "I Love JS"
//     console.log(x)
// }

// // someFunction(myStr); //Hello World
// // console.log(myStr);
// someFunction(myArray[1]); // 2
// console.log(myArray);

// Pass by Value

// let outside = 44;

// function testFunction(num) {
//     return num +=22
// }
// let result = testFunction(outside);

// console.log(testFunction(11));


// Pass by Reference

// const outside = {
//     num: 44
// }

// function testFunction(obj) {
//     obj.num += 22;
// }

// console.log(outside)

// let result = testFunction(outside); // 66

// console.log(outside.num); // 66

// let result2 = testFunction(outside);
// let result3 = testFunction(outside);

// console.log(outside.num);

// const myArray = [1, 2, 3];

// function someFunction(myArr) {
//     console.log(myArr);
//     const newArr = [...myArr];

//     newArr[1] = "I love JS"
//     console.log(myArr, newArr);

//     return newArr;
// }

// someFunction(myArray);
// console.log(myArray);

// function testFunction(notUsed) {
//     let hello = "Hello World!"
//     return hello;
// }

// function calculateSale() {
//     let total = 0;
// }

// function calculateDiscount() {
//     let total = 0;
// }

// console.log(testFunction(null));
// // console.log(hello);  //not defined

// function varTest() {
//     var x = 1;

//     if (x === 1) {
//     var x = 2; 
//     console.log(x);
//     }

//   console.log(x);
// }

// varTest();

//let is scoped to the code block making its value protected and the label reusable

// function letTest() {
//     let x = 1; 
//     if (x === 1) {
//        let x = 2;
//        console.log(x);
//     }
//     console.log(x);
// }

// letTest(1, 2, 3, 40);

// const someString = "Some String";
// console.log(someString);

function celsiusToF(aNum) {
    const newTemp=  (aNum * 9/5) + 32;
    return newTemp;
}

console.log(celsiusToF(22)); //this the value for the label aka argument