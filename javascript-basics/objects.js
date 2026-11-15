// JavaScript Objects

// Creating an object
const student = {
    name: "Mohib",
    age: 22,
    country: "Pakistan",
    course: "Computer Science"
};

// Accessing properties
console.log(student.name);
console.log(student.age);

// Bracket notation
console.log(student["country"]);

// Adding a property
student.university = "My University";

// Updating a property
student.age = 23;

// Display object
console.log(student);

// Loop through object
for (const key in student) {
    console.log(key, student[key]);
}
