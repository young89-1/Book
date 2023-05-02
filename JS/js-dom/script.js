console.log("Hello DOM!")

const content = document.getElementById("content");
console.log(content);

const title = document.createElement("h1");

title.textContent = "Hello DOM!";

content.appendChild(title);

const text = document.createElement("p");

text.textContent = "jflhfajdfhjlkdhfljd hfjahldfhjahdjlfahdflk jadhfjlkahdjfk hahdfkljhakjdhflkjadhljfhalk jdhflhakjldfhlkajdhf jlkhflkjahdlfhk ljahdk fjlhalkdh sfkljahldjf kdhfhadjkfh jakhdfjk halsdjkfhl kajdshflkjadhflkjahd sljkfhalkjdsfhlakjdshf lkjadhflkjdhflkjdhlkjfhkdsjfh";

content.appendChild(text);

// Select h2 and change the text

const h2 = document.getElementById("h2");

h2.textContent = "I took over your h2!!";

h2.style.color = "#FF0000"
console.log(h2.style);
console.log(h2.style.color);

//Event Listeners

//Events happen on elements.
//You select and element
//You add the event listener to the selected element

const btn = document.getElementsByTagName("button")[0];
// console.log(btn);

btn.addEventListener("click", () => alert("Hello World!"));

// title.addEventListener("mouseover", function() {
//    alert("You scrolled the mouse over the title! Gold Star!")
// });

const aName = "Luke";

const moreText = `Hello ${aName}, the DOM is so cool`;

console.log("where are you", content.children);
content.children[1].textContent += moreText;

// working with input values

const input = document.getElementById("input");
const todoBtn = document.getElementById("todoBtn");
const ul = document.getElementById("ul");

let newLI = "";

input.addEventListener("input", (e) => {
    console.log(e.target.value);
    newLI = e.target.value
});

todoBtn.addEventListener("click", (e) => {
    if (newLI =="") {
        alert("Please enter a valid task");
        return;
    } 

    const tempLI = document.createElement("li");
    tempLI.textContent = newLI;
    ul.appendChild(tempLI);
    input.value = "";
    newLI = "";
});

// console.log(input);

// console.log(ul.children);