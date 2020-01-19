var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

css.textContent = "linear-gradient(to right, rgb(0, 255, 0), rgb(255, 0, 0));";

color1.addEventListener("input", gradientSetter);
color2.addEventListener("input", gradientSetter);
button.addEventListener("click", setRandomColors);

function gradientSetter (){
    body.style.background = "linear-gradient(to right , " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

//selects one random RGB color
function randColorBuilder(){
    
    var rColor = "rgb(" + randNumberGetter() + ", " + randNumberGetter() + ", " + randNumberGetter() +")";
    return rColor;
}

function randNumberGetter(){
    return Math.floor(Math.random() * 256);
}


function setRandomColors(){
    body.style.background = "linear-gradient(to right , " + randColorBuilder() + ", " + randColorBuilder() + ")";

    css.textContent = body.style.background + ";";
}      

