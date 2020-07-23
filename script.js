var color1 = document.querySelector("#color1")
var color2 = document.querySelector("#color2")
var body = document.querySelector("#body")
var outputCSS = document.querySelector("#outputcss")
var randButton = document.querySelector("#random")

// startup should choose from pool of pre-made color selections to help prevent "ugly" page load

// ~~ FUNCTIONS ~~ //

// initial run to set up stuff
function startRun(){
    setRandomColors()
    setColors()
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
randButton.addEventListener("click", startRun)

startRun()
