//contain all the colors name and hex-value
let colorsMap = new Map();

function load_colorsMap(){
    //initialize map
    colorsMap.set("Pink", "#EDC6C0");
    colorsMap.set("Red", "#D43633");
    colorsMap.set("Orange", "#E1623B");
    colorsMap.set("Beige", "#F9F0DC");
    colorsMap.set("Yellow", "#F7D954");
    colorsMap.set("Green", "#295632");
    colorsMap.set("Light Blue", "#D1E4F3");
    colorsMap.set("Dark Blue", "#1C2753");
    colorsMap.set("Purple", "#5C2E41");
    colorsMap.set("Brown", "#4D342D");
    colorsMap.set("Gray", "#ADADAD");

    colorsMap.set("Black", "#0A0A0A");
    colorsMap.set("White", "#FFFFFF") 
}


//PrimaryColor objects
function PrimaryColor(primaryName) {
    this._name = primaryName;
    //stores all of the colors that matches with the primary colors
    this._secondaryColorsArr = [];
}


//array of Primary Color objects
let primaryColorsArr = [];

/*
    PrimaryColorArr[ PrimaryColorObject[Colors, secondaryColorArr[Colors] ], ... ]
*/

function load_PrimaryColors(){
    for (let [color, _ ] of colorsMap){
        if (color !== "Black" && color !== "White"){
            primaryColorsArr.push( new PrimaryColor(color) );
        }
    }
}

function load_SecondaryColors(){
    for (let color of primaryColorsArr){
        let colorName = color._name;
        if (colorName === "Pink" ){
            color._secondaryColorsArr.push("Light Blue");
            color._secondaryColorsArr.push("Dark Blue");
            color._secondaryColorsArr.push("Gray");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Black");
            color._secondaryColorsArr.push("Red");
            color._secondaryColorsArr.push("Beige");
        }
        else if (colorName === "Red"){
            color._secondaryColorsArr.push("Light Blue");
            color._secondaryColorsArr.push("Dark Blue");
            color._secondaryColorsArr.push("Gray");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Black");
            color._secondaryColorsArr.push("Pink");
            color._secondaryColorsArr.push("Beige");
        }
        else if (colorName === "Orange"){
            color._secondaryColorsArr.push("Green");
            color._secondaryColorsArr.push("Light Blue");
            color._secondaryColorsArr.push("Dark Blue");
            color._secondaryColorsArr.push("Gray");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Black");
            color._secondaryColorsArr.push("Beige");
            color._secondaryColorsArr.push("Brown");
        }
        else if (colorName === "Beige"){
            color._secondaryColorsArr.push("Dark Blue");
            color._secondaryColorsArr.push("Purple");
            color._secondaryColorsArr.push("Brown");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Black");
            color._secondaryColorsArr.push("Yellow");
            color._secondaryColorsArr.push("Orange");
        }
        else if (colorName === "Yellow"){
            color._secondaryColorsArr.push("Green");
            color._secondaryColorsArr.push("Dark Blue");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Black");
            color._secondaryColorsArr.push("Beige");
        }
        else if (colorName === "Green"){
            color._secondaryColorsArr.push("Orange");
            color._secondaryColorsArr.push("Purple");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Black");
            color._secondaryColorsArr.push("Yellow");
            color._secondaryColorsArr.push("Beige");
        }
        else if (colorName === "Light Blue"){
            color._secondaryColorsArr.push("Pink");
            color._secondaryColorsArr.push("Red");
            color._secondaryColorsArr.push("Orange");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Black");
            color._secondaryColorsArr.push("Dark Blue");
            color._secondaryColorsArr.push("Purple");
        }
        else if (colorName === "Dark Blue"){
            color._secondaryColorsArr.push("Pink");
            color._secondaryColorsArr.push("Red");
            color._secondaryColorsArr.push("Yellow");
            color._secondaryColorsArr.push("Gray");
            color._secondaryColorsArr.push("Black");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Light Blue");
            color._secondaryColorsArr.push("Purple");
        }
        else if (colorName === "Purple"){
            color._secondaryColorsArr.push("Orange");
            color._secondaryColorsArr.push("Gray");
            color._secondaryColorsArr.push("Green");
            color._secondaryColorsArr.push("Black");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Light Blue");
            color._secondaryColorsArr.push("Dark Blue");
        }
        else if (colorName === "Brown"){
            color._secondaryColorsArr.push("Beige");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Black");
            color._secondaryColorsArr.push("Orange");
        }
        else if (colorName === "Gray"){
            color._secondaryColorsArr.push("Pink");
            color._secondaryColorsArr.push("Red");
            color._secondaryColorsArr.push("Dark Blue");
            color._secondaryColorsArr.push("Purple");
            color._secondaryColorsArr.push("White");
            color._secondaryColorsArr.push("Black");
        }
        else {
            alert("ERROR ON SWITCH!");
        }
    }
}

//generate a random number given a bound
function getRandomIndex(upperBound_notInclusive){
    return ( Math.floor(Math.random() * upperBound_notInclusive) );
}

function displayRandomColorCombo(){
    //select a random primary and secondary color
    let randPrimaryColorIndex = getRandomIndex(primaryColorsArr.length);
    let randSecondaryColorIndex = getRandomIndex(primaryColorsArr[randPrimaryColorIndex]._secondaryColorsArr.length);

    //change the main div container bg color
    let mainColorDisplay = document.querySelector(".main-color-display");
    let mainBgColor = colorsMap.get( primaryColorsArr[randPrimaryColorIndex]._name );
    mainColorDisplay.style.backgroundColor = mainBgColor;
    
    //change the secondary div container bg color
    let secondaryColorDisplay = document.querySelector(".secondary-color-display");
    let secondaryBgColor = colorsMap.get( primaryColorsArr[randPrimaryColorIndex]._secondaryColorsArr[randSecondaryColorIndex] );
    secondaryColorDisplay.style.backgroundColor = secondaryBgColor;
}   

window.onload = function (){
    load_colorsMap();
    load_PrimaryColors();
    load_SecondaryColors();

    //generate button
    const generate_buttonEl = document.getElementById("generate-button");
    generate_buttonEl.addEventListener("click", displayRandomColorCombo);
}