// const person = {
//     name: "John Doe",
//     age: 30,
//     gender: "Male",
//     hobbies: ["reading", "running", "traveling"],
//     address: {
//        street: "123 Main St",
//        city: "New York",
//        state: "NY",
//        ZipCode: "10001"
//     },
//     greet: function() {
//         console.log("this is", this)
//         return `Hello ${this.name}!`
//     },
//     sendMail: function(fromWho) {
//         console.log(this.address.street + " has new mail " + fromWho );
//     }
// };

// console.log(person.name);  //John Doe
// console.log(person.age);  // 30
// console.log(person.hobbies[1]); //running
// console.log(person.address.city); // New York
// console.log(person.greet()); // Hello John Doe!
// console.log(person.sendMail("Yoda"));

// const book = { 
//     title: "The Hitchhikers's Guide to the Galaxy",
//     author: "Douglas Adams",
//     year: 1979,
//     genres: ["science fiction", "comedy", "satire"],
//     publishers: {
//         name: "Pan Books",
//         location: "London"
//     }
// }

// book.pages = 216;
// book.a = "This is a test of how Objects don't care about order"

// console.log(book.title);
// console.log(book.year);
// console.log(book.genres[0]);
// console.log(book.publishers.location);
// console.log(book)

// console.log(`${book.year}, ${book.genres[1]}, ${book.publishers.location}`)

// book.publishers.location = "Iceland";

// delete book.pages;

// console.log(book);

// console.log(book["year"]);

const bankAccount = {
    accountNumber: "1234567890",
    accountHolder: "Jane Joe",
    balance: 5000,
    transaction: [ 
        {date: "2022-03-01", description: "Deposit", amount: 2000 },
        {date: "2002-03-15", description: "Withdrawal", amount: -1000 },
        {date: "2022-04-01", description: "Deposit", amount: 1500 },
    ],
    getBalance: function() {
        return this.balance;
    },
    deposit: function(amount) {
        this.balance += amount;
        this.transaction.push({
            date: new Date().toISOString(),
            description: "Deposit",
            amount,
        });
    },
    withdraw: function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transaction.push({date: new Date().toISOString(), description: "Withdrawal", amount});
        } else {
            console.log("Insufficient balance");
        }
    }
};

bankAccount.deposit(1000);
// console.log(bankAccount.getBalance());
// bankAccount.withdraw(10000);
bankAccount.withdraw(500);
console.log(bankAccount);

