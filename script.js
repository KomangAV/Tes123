document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".moving-image");
    images.forEach(img => {
        img.style.transition = "transform 1s";
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});