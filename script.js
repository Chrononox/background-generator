var color1 = document.querySelector("#color1")
var color2 = document.querySelector("#color2")
var body = document.querySelector("#body")
var outputCSS = document.querySelector("#outputcss")
var randButton = document.querySelector("#random")

// startup pool of pre-made color selections to help prevent "ugly" page load
var leftColor = ["#c22644", 
                "#4d38c6", 
                "#c11357", 
                "#3b7fe0", 
                "#3d4616", 
                "#000000"]

var rightColor = ["#0debb1", 
                "#2dde78",
                "#0191e9",
                "#b225b3",
                "#a31ddb",
                "#000000"]

// ~~ FUNCTIONS ~~ //

// initial run to set up stuff
function startRun(){
    choosePoolColor()
    setColors()
}

// make random button work
function randButtonGo(){
    setRandomColors()
    setColors()
}

function returnRandNumber(len){
    return Math.floor(Math.random() * len)
}

//choose random color from pool and tries to make a pretty background
function choosePoolColor(){
    color1.value = leftColor[returnRandNumber(leftColor.length)]
    console.log("1 ", color1.value)
    do {
        color2.value = rightColor[returnRandNumber(rightColor.length)]
        console.log("2 ",color2.value)
    }while(color1.value[1] === color2.value[1])
}

//choose one random "color" in hex
function randColorChooser(){
    var full = ''
    for (i=0; i < 3; i++){
        var value = Math.floor(Math.random() * 256).toString(16)
        if (value.length < 2){
            value = "0" + value
            full += value
        } else {
            full += value
        }    
    }    
    return full
}

// set the random colors
function setRandomColors(){
    color1.value = "#" + randColorChooser()
    color2.value = "#" + randColorChooser()
}

// set the background colors based on user input
function setColors(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")"
    updateCssDisplay()
}

// Update the css display to show current values
function updateCssDisplay(){
    outputCSS.textContent = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
}

// EVENT LISTENERS //
color1.addEventListener("input", setColors)
color2.addEventListener("input", setColors)
randButton.addEventListener("click", randButtonGo)

startRun()
