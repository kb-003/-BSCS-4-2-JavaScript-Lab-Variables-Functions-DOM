//Activity 1: Variables and Functions
let name = "Ailen";
let age = 30;

function greetUser(name, age) {
    return `Hello, I am ${name} and I am ${age} years old.`;
}

let message = greetUser(name, age);

console.log(
    "%c" + message,
    "color: #5283bf; font-style: italic; font-weight: bold;"
);

//Activity 2 and 3
function getRandomColor() {
    let colorLetters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += colorLetters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.getElementById("colorBtn");
const colorHexCode = document.getElementById("colorHexCode");
let previousColor = "#ffffff"; 

button.addEventListener("click", () => {
    const randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;
    colorHexCode.textContent = "Great! The current background color (Hex code) is " + randomColor;

    console.log("You've successfully changed the background to:", randomColor);
    console.log("Previous color:", previousColor, "| Current color:", randomColor);

    previousColor = randomColor;
});