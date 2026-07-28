// پیام خوشامدگویی شگفتا
window.onload = function(){

    console.log("به شگفتا خوش آمدید ✨");

};


// حرکت نرم برای لینک‌های منو
document.querySelectorAll("nav a").forEach(function(link){

    link.addEventListener("click", function(event){

        event.preventDefault();

    });

});


// ساخت ستاره‌های متحرک
function createStar(){

    let star = document.createElement("div");

    star.innerHTML = "⭐️";

    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = "-20px";
    star.style.fontSize = (10 + Math.random()*20) + "px";
    star.style.opacity = "0.8";
    star.style.pointerEvents = "none";
    star.style.animation = "fall 5s linear";

    document.body.appendChild(star);


    setTimeout(function(){

        star.remove();

    },5000);

}


setInterval(createStar,800);
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

if(avatar){

    avatar.addEventListener("click",function(){

        if(bubble.style.display=="block"){
            bubble.style.display="none";
        }else{
            bubble.style.display="block";
        }

    });

}
const avatar=document.querySelector(".avatar");
const bubble=document.querySelector(".bubble");

const messages=[
"سلام 🌸 من نقشین هستم.",
"به شگفتا خوش اومدی.",
"اگر دنبال دعا، آموزش یا دانستنی هستی کمکت می‌کنم.",
"روی دسته‌ها کلیک کن و شروع کن ✨"
];

let i=0;

function speak(){

    bubble.classList.add("show");

    bubble.innerHTML=messages[i];

    i++;

    if(i>=messages.length){
        i=0;
    }

}

avatar.addEventListener("click",speak);

setInterval(speak,8000);
