// ===============================
// شگفتا | script.js
// ===============================

// خوش آمدگویی
window.onload = function () {
    console.log("به شگفتا خوش آمدید ✨");
};

// ------------------------------
// جستجو
// ------------------------------

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

// ------------------------------
// حالت شب
// ------------------------------

const darkBtn = document.getElementById("darkModeBtn");

if (darkBtn) {

    darkBtn.onclick = function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            darkBtn.innerHTML = "☀️ حالت روز";
        } else {
            darkBtn.innerHTML = "🌙 حالت شب";
        }

    };

}

// ------------------------------
// نقشین
// ------------------------------

const avatar = document.querySelector(".avatar");
const bubble = document.querySelector(".bubble");

const messages = [

    "سلام 🌸 من نقشین هستم.",

    "به شگفتا خوش اومدی.",

    "اینجا هر روز چیزهای جدید یاد می‌گیری.",

    "برات آرزوی حال خوب دارم 🌿"

];

let msg = 0;

function speak() {

    if (!bubble) return;

    bubble.classList.add("show");

    bubble.innerHTML = messages[msg];

    msg++;

    if (msg >= messages.length) {
        msg = 0;
    }

}

if (avatar) {

    avatar.onclick = speak;

    setInterval(speak, 8000);

}

// ------------------------------
// لوگوی درخشان
// ------------------------------

const logo = document.getElementById("logo");

if (logo) {

    setInterval(function () {

        logo.classList.toggle("glow");

    }, 1000);

}

// ------------------------------
// ستاره‌ها
// ------------------------------

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

// ------------------------------
// فال حافظ
// ------------------------------

const falBtn = document.getElementById("falBtn");
const falResult = document.getElementById("falResult");

const fals = [

"🌹 صبر داشته باش، گشایش نزدیک است.",

"🍀 روزهای خوبی در راه است.",

"✨ امیدت را از دست نده؛ خدا با توست.",

"🌸 نیتت خیر است و نتیجه‌اش مبارک خواهد بود.",

"🕊️ آرامش در انتظار توست."

];

if (falBtn && falResult) {

    falBtn.onclick = function () {

        falBtn.classList.toggle("open");

        const random = Math.floor(Math.random() * fals.length);

        falResult.innerHTML = fals[random];

    };

}

const dateElement = document.getElementById("date");

if (dateElement) {

    const today = new Date();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long"
    };

    dateElement.innerHTML =
    today.toLocaleDateString("fa-IR", options);

}
