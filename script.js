// Print message in console
console.log("Portfolio Loaded");

// Simple welcome message
alert("Welcome to my portfolio!");

// Smooth scrolling (simple version)
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        let section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});