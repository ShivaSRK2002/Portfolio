// Function to toggle responsive navigation
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle();
    navbar.classList.toggle(active);
}

// Function to toggle dark mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode"); // Adds or removes 'dark-mode' class
}
