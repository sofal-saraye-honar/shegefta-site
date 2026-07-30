// ===== خوش‌آمدگویی =====

window.onload = function () {
    console.log("به شگفتا خوش آمدید ✨");
};

// ===== جستجو =====

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".card").forEach(function (card) {

            if (card.innerText.toLowerCase().includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// ===== حالت شب =====

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkBtn.innerHTML = "☀️ حالت روز";
        } else {
            darkBtn.innerHTML = "🌙 حالت شب";
        }

    });

}

// ===== نقشین =====

const avatar = document.querySelector(".avatar");
const bubble = document.querySelector(".bubble");

const messages = [
    "سلام 🌸 من نقشین هستم.",
    "به شگفتا خوش اومدی.",
    "اگر دنبال دعا، آموزش یا دانستنی هستی کمکت می‌کنم.",
    "روی بخش‌های مختلف سایت کلیک کن و لذت ببر ✨"
];

let i = 0;

function speak() {

    if (!bubble) return;

    bubble.classList.add("show");
    bubble.innerHTML = messages[i];

    i++;

    if (i >= messages.length) {
        i = 0;
    }

}

if (avatar) {

    avatar.addEventListener("click", speak);

    setInterval(speak, 8000);

}

// ===== ستاره‌های متحرک =====

const starsContainer = document.getElementById("stars-container");

function createStar() {

    if (!starsContainer) return;

    const star = document.createElement("div");

    star.className = "star";
    star.innerHTML = "⭐";

    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = (3 + Math.random() * 4) + "s";

    starsContainer.appendChild(star);

    setTimeout(function () {
        star.remove();
    }, 7000);

}

setInterval(createStar, 700);

// ===== لوگوی درخشان =====

const logo = document.getElementById("logo");

if (logo) {

    setInterval(function () {

        logo.classList.toggle("glow");

    }, 1000);

}
