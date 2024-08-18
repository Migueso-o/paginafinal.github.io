// script.js
function initializeGallery() {
    const images = document.querySelectorAll("#gallery figure img");
    images.forEach((image, index) => {
        image.setAttribute("tabindex", index + 1);
        image.addEventListener("mouseover", highlightImage);
        image.addEventListener("mouseleave", unhighlightImage);
        image.addEventListener("focus", highlightImage);
        image.addEventListener("blur", unhighlightImage);
    });
}

function highlightImage(event) {
    event.target.style.border = "2px solid blue";
    console.log("Image focused or hovered");
}

function unhighlightImage(event) {
    event.target.style.border = "2px solid transparent";
}
