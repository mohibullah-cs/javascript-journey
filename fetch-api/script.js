const fetchBtn = document.getElementById("fetchBtn");
const userContainer = document.getElementById("userContainer");
const searchInput = document.getElementById("searchInput");
const status = document.getElementById("status");

let users = [];

// Fetch data from API
async function fetchUsers() {

    status.textContent = "Loading data...";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        users = await response.json();

        status.textContent = "Users loaded successfully!";

        displayUsers(users);

    } catch (error) {

        status.textContent = error.message;

        console.error(error);

    }

}

// Display users
function displayUsers(userData) {

    userContainer.innerHTML = "";

    if (userData.length === 0) {
        status.textContent = "No users found.";
        return;
    }

    userData.forEach(user => {

        const card = document.createElement("div");

        card.className = "user-card";

        const name = document.createElement("h3");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + user.email;

        const city = document.createElement("p");
        city.textContent = "City: " + user.address.city;

        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(city);

        userContainer.appendChild(card);

    });

}

// Search users
searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchValue)
    );

    displayUsers(filteredUsers);

});

// Button event
fetchBtn.addEventListener("click", fetchUsers);
