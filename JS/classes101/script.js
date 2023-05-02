// Classes are object factories!

// class Dog {
//     constructor(name, species, age) {
//         this.name = name;
//         this.species = species;
//         this.age = age;
//     }
//     description() {
//         return `${this.name} is a ${this.age} year old ${this.species}`
//     }
    
//     bark_at(other_dog) {
//         console.log("this is", this);
//         return `BORK! ${this.name} barked at ${other_dog.name}`
//     }
// }

// let fido = new Dog("Fido", "French Bulldog", 2);
// let spot = new Dog("Spot", "Dalmation", 5);

// // console.log(fido);
// // console.log(spot);

// // console.log(`${fido.name} is a ${fido.age} year old ${fido.species}`);

// console.log(fido.bark_at(spot));

// console.log(fido.description());

//Animal Class

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
    }
}

//Extend the Animal Class to make dog. Dog will include everything from Animal.
// Dog will be its own class, that extends the Animal class

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age); // Call the constructor of the parent class
        this.breed = breed;
    }
    bark() {
        console.log("Woof!");
    }
    sayHello() {
        console.log(`${this.name} the ${this.breed} dog says hello.
        `);
    }
}

const myDog = new Dog("Buddy", 3, "Golden Retriever");

console.log(myDog);
myDog.bark();
myDog.sayHello();