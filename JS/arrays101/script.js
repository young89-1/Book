// I love JS!

// const pets = [ "Inky", "Tiny", "Lord Byron", "Luna", "Charlie", [1, 2, 42]];

// console.log(pets[0], pets[3]); 
// console.log(pets[5][2]);
// for (let i = 0; i < pets.length; i++) {
//     console.log(pets[i]);
// }
// pets[60] = "Batman";
// .push adds items to end of array
// pets.push("Robin");

// console.log(pets);

// pets.pop();
// pets.pop();
// const charlie = pets.pop();
// const inky = pets.shift();
// pets.unshift([charlie, inky]);

// console.log(charlie, inky);
// console.log(pets);

// console.log(pets[2]);

// const lb = pets[2];

// console.log(lb);

// pets[2] = "Mark Twain";

// console.log(lb);
// console.log(pets);

// console.log(pets[0][1]);

// console.log(pets.toString());

// console.log(pets.join(" , "));

// const petsStr = pets.join(",");
// console.log(petsStr);
// const myPetsArr = petsStr.split(",")
// console.log(myPetsArr);

// const joinedArr = pets.concat(myPetsArr);
// console.log(joinedArr);

// console.log([100, 200, 300, 400].concat(joinedArr));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits[2] = "Bad Apple"

// fruits.splice(2, 0, "Peppermint", "Strawberry");

// console.log(fruits);

// const newFruits = fruits.slice(1, 3);

// console.log(newFruits);
// console.log(fruits);

// const copyOfArray = [...fruits, "Pineapple", "Spinach", "Chocolate"];

// console.log(copyOfArray);
// console.log(fruits);

// console.log(fruits.sort());
// console.log(fruits.reverse());

const nums = [20, 30, 42, 10, 1000, 500, 5];

// console.log(nums.sort((a, b) => b - a));

// function sortNums(someArr) {
    // for (let i = 0; i < someArr.length; i++) {
        //compare 2 items in Array
        //push larger to front
        //move smaller to back
        //compare until done
 //   }
// }

//Map returns a new array, after executing a function on each item of the array.
// .map()

const doubleNums = nums.map(item => item * 2);

// function doubleNum(item) { // doing it with a function
//     return item * 2
// }

// console.log(doubleNums);
// console.log(nums);

//FILTER
//Filter returns only items in array that pass a conditional check
//.filter()

const over29 = nums.filter(item => item > 29)

console.log(over29);

//For Each Method
// forEach()

over29.forEach(item => console.log(item));