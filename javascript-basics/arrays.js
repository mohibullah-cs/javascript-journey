// JavaScript Arrays

// Creating an array
const languages = [
    "Python",
    "JavaScript",
    "HTML",
    "CSS"
];

// Accessing elements
console.log(languages[0]);
console.log(languages[1]);

// Adding an element
languages.push("SQL");

// Removing the last element
languages.pop();

// Array length
console.log("Total languages:", languages.length);

// Loop through array
for (const language of languages) {
    console.log(language);
}

// Checking an element
console.log(languages.includes("Python"));
