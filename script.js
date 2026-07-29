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

speech.lang = "fa-IR";    
speech.rate = 0.9;    
speech.pitch = 1;    
speech.volume = 1;    

speechSynthesis.speak(speech);

}

}
if (avatar && bubble) {

avatar.addEventListener("click", speak); avatar.addEventListener("dblclick", function () { talk("سلام دوست من. به شگفتا خوش اومدی. امیدوارم امروز چیزهای جالبی یاد بگیری."); 

});

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
const hafez=document.querySelector(".hafez-avatar");
const hafezText=document.querySelector(".hafez-text");

const fal=[

"🌸 فال شما: روزهای خوبی در راه است.",
"🍀 فال شما: به نیتت می‌رسی.",
"🌹 فال شما: صبور باش، نتیجه نزدیک است.",
"✨ فال شما: خبر خوشی خواهی شنید.",
"💚 فال شما: امیدت را از دست نده."

];

if(hafez){

    hafez.addEventListener("click",function(){

        let random=Math.floor(Math.random()*fal.length);

        hafezText.innerHTML=fal[random];

    });

}
const falBtn = document.getElementById("falBtn");
const falResult = document.getElementById("falResult");

const hafezFal = [

"🌹 اگر غمگینی، امیدت را از دست نده؛ گشایش نزدیک است.",

"🍀 راهی که آغاز کرده‌ای، پایان خوشی خواهد داشت.",

"✨ صبر کن؛ اتفاق زیبایی در انتظار توست.",

"💚 با مهربانی، درهای تازه‌ای به رویت باز می‌شود.",

"🌸 نیتت پاک است؛ با توکل ادامه بده."

];

if(falBtn){

    falBtn.addEventListener("click",function(){

        let random=Math.floor(Math.random()*hafezFal.length);

        document.querySelector(".book").style.transform="rotate(-15deg)";

        setTimeout(function(){

            document.querySelector(".book").style.transform="rotate(0deg)";

            falResult.innerHTML=hafezFal[random];

        },500);

    });

}
const falBtn = document.getElementById("falBtn");
const falResult = document.getElementById("falResult");

const falList = [

"🌸 فال شما: روزهای زیبایی در پیش است.",

"🍀 فال شما: خبر خوشی در راه است.",

"🌹 فال شما: صبر کلید موفقیت توست.",

"✨ فال شما: به نیتت خواهی رسید.",

"💚 فال شما: امیدت را حفظ کن، گشایش نزدیک است.",

"🌼 فال شما: لبخند بزن، اتفاق خوبی منتظر توست."

];

if(falBtn){

    falBtn.addEventListener("click",function(){

        const random=Math.floor(Math.random()*falList.length);

        falResult.innerHTML=falList[random];

    });

}
