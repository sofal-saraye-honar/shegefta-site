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
