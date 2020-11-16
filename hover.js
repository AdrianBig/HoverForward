let button = document.querySelector("#forward");
let icon = document.querySelector("img");

function moveMouseOver(e) {
    icon.style.transform = "translateX(10px)";
}
function moveMouseOut(e) {
    icon.style.transform = "translateX(0px)";
}

button.addEventListener("mouseover", moveMouseOver);
button.addEventListener("mouseout", moveMouseOut);