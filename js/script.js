const searchBox = document.querySelector("input");

searchBox.addEventListener("mouseover", () => {
    searchBox.style.backgroundColor = "#fff4e6";
});

searchBox.addEventListener("mouseout", () => {
    searchBox.style.backgroundColor = "white";
});

searchBox.addEventListener("focus", () => {
    searchBox.placeholder = "Search your favorite food...";
});

searchBox.addEventListener("blur", () => {
    searchBox.placeholder = "Search for restaurant, cuisine or a dish";
});

/* Navbar animation */

const navLinks = document.querySelectorAll("ul li a");

navLinks.forEach(link => {

    link.addEventListener("mouseover", () => {
        link.style.transform = "scale(1.1)";
    });

    link.addEventListener("mouseout", () => {
        link.style.transform = "scale(1)";
    });

});