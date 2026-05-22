const heroBtn = document.querySelector(".hero button");

heroBtn.addEventListener("click", () => {
    alert("Welcome To LibraryHub 🚀");
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-15px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

const services = document.querySelectorAll(".service");

services.forEach(service => {

    service.addEventListener("click", () => {

        service.style.background = "#6c63ff";
        service.style.color = "white";

    });

});