// JavaScript Functions

// 1. Basic function
function greet() {
    console.log("Welcome to JavaScript!");
}

greet();

// 2. Function with parameters
function greetStudent(name) {
    console.log("Hello " + name);
}

greetStudent("Mohib");

// 3. Function with return
function add(a, b) {
    return a + b;
}

const sum = add(10, 20);

console.log("Addition:", sum);

// 4. Arrow function
const multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication:", multiply(5, 4));

// 5. Default parameter
function introduce(name = "Student") {
    console.log("My name is " + name);
}

introduce();
introduce("Mohib");

// 6. Function with array
function showLanguages(languages) {
    for (const language of languages) {
        console.log(language);
    }
}

showLanguages(["Python", "JavaScript", "HTML"]);
