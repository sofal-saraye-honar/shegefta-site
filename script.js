document.addEventListener("DOMContentLoaded", function () {

const logo = document.querySelector(".logo");

setInterval(() => {
logo.classList.toggle("glow");
},1200);

});
