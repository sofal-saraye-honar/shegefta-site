// پیام خوشامدگویی شگفتا
window.onload = function () {
    console.log("به شگفتا خوش آمدید ✨");
};

// حرکت نرم برای لینک‌های منو
document.querySelectorAll("nav a").forEach(function(link){

    link.addEventListener("click", function(event){
        event.preventDefault();
    });

});
    
const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup",function(){

        let value = this.value.toLowerCase();

        document.querySelectorAll(".card").forEach(function(card){

            if(card.innerText.toLowerCase().includes(value)){
                card.style.display="block";
            }else{
                card.style.display="none";
            }

        });

    });

}
const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){

    darkBtn.addEventListener("click",function(){

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            darkBtn.innerHTML="☀️ حالت روز";
        }else{
            darkBtn.innerHTML="🌙 حالت شب";
        }

    });

}
const avatar = document.querySelector(".avatar");
const bubble = document.querySelector(".bubble");

const messages=[
"سلام 🌸 من نقشین هستم.",
"به شگفتا خوش اومدی.",
"اگر دنبال دعا، آموزش یا دانستنی هستی کمکت می‌کنم.",
"روی دسته‌ها کلیک کن و شروع کن ✨"
];

let i=0;

function speak(){

    if (!bubble) return;

bubble.classList.add("show");

bubble.innerHTML = messages[i];

    i++;

    if(i>=messages.length){
        i=0;
    }

}

function talk(text){

    if("speechSynthesis" in window){

        const speech = new SpeechSynthesisUtterance(text);

        speech.lang = "en-US";
        speech.rate = 0.9;
        speech.pitch = 1;
        speech.volume = 1;

        speechSynthesis.speak(speech);

    }

}
if (avatar && bubble) {

    avatar.addEventListener("click", speak);

    
    avatar.addEventListener("dblclick", function () {
    talk("Welcome to Shegefta.");

    setInterval(speak, 8000);

}
const starsContainer = document.getElementById("stars-container");

function createStar(){

    const star=document.createElement("div");

    star.className="star";

    star.innerHTML="⭐";

    star.style.left=Math.random()*100+"vw";

    star.style.animationDuration=(3+Math.random()*4)+"s";

    starsContainer.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },7000);

}

setInterval(createStar,700);
const logo = document.getElementById("logo");

if (logo) {

    setInterval(function () {

        logo.classList.toggle("glow");

    }, 1000);

}
