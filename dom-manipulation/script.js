const message = document.getElementById("message");
const userInput = document.getElementById("userInput");

const changeBtn = document.getElementById("changeBtn");
const colorBtn = document.getElementById("colorBtn");
const resetBtn = document.getElementById("resetBtn");

const skillList = document.getElementById("skillList");
const addSkillBtn = document.getElementById("addSkillBtn");

// Change text
changeBtn.addEventListener("click", function() {

    const name = userInput.value.trim();

    if (name === "") {
        message.textContent = "Please enter your name!";
    } else {
        message.textContent = `Welcome, ${name}!`;
    }

});

// Change text color
colorBtn.addEventListener("click", function() {

    message.style.color = "green";

});

// Reset content
resetBtn.addEventListener("click", function() {

    message.textContent = "Welcome to my JavaScript project!";
    message.style.color = "black";
    userInput.value = "";

});

// Add a new skill
addSkillBtn.addEventListener("click", function() {

    const newSkill = document.createElement("li");

    newSkill.textContent = "Python";

    skillList.appendChild(newSkill);

    addSkillBtn.disabled = true;

});
