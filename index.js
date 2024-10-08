/*
AUTHOR: Kevin Dong
DATE  : 7/2/24
ABOUT : Program that generates a random primary color 
        and a random secondary color that pairs well
        with selected primary color. Inspiration comes
        from hard time picking outfit combos.
*/

//contains name of color and its hex-value
let colorsMap = new Map();

//initialize the map of colors
function load_colorsMap(){

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
//contains name of the object and holds an array of secondary colors
function PrimaryColor(primaryName) {
    this._name = primaryName;

    //stores all of the colors that matches with the respective primary color
    this._secondaryColorsArr = [];
}


//array of Primary Color objects
let primaryColorsArr = [];

//initialize the primary color array
function load_PrimaryColors(){
    for (let [color, _ ] of colorsMap){
        if (color !== "Black" && color !== "White")
            primaryColorsArr.push( new PrimaryColor(color) );
    }
}

//initialize the secondary array in each primary color object
function load_SecondaryColors(){
    for (let color of primaryColorsArr){
        let colorName = color._name;

        if (colorName === "Pink"){
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
        else { //debug
            alert("ERROR ON SWITCH!");
        }
    }
}

//generate a random number given an upper bound (not inclusive)
function getRandomIndex(upperBound_notInclusive){
    return ( Math.floor(Math.random() * upperBound_notInclusive) );
}

/* 
    [CREDIT]
    Author: Pimp Trizkit
    URL: https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
*/

//lighten or darken of a color
const pSBC=(p,c0,c1,l)=>{
    let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
    if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
    if(!this.pSBCr)this.pSBCr=(d)=>{
        let n=d.length,x={};
        if(n>9){
            [r,g,b,a]=d=d.split(","),n=d.length;
            if(n<3||n>4)return null;
            x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
        }else{
            if(n==8||n==6||n<4)return null;
            if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
            d=i(d.slice(1),16);
            if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
            else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
        }return x};
    h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
    if(!f||!t)return null;
    if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
    else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
    a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
    if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
    else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}

//core function that generates a random color combination of main and secondary color 
function displayRandomColorCombo(){
    //select a random primary and secondary color
    let randPrimaryColorIndex = getRandomIndex(primaryColorsArr.length);
    let randSecondaryColorIndex = getRandomIndex(primaryColorsArr[randPrimaryColorIndex]._secondaryColorsArr.length);

    //change the main div container bg color to the selected random color
    let mainColorDisplay = document.querySelector(".main-color-display");
    let mainBgColor = colorsMap.get( primaryColorsArr[randPrimaryColorIndex]._name );
    mainColorDisplay.style.backgroundColor = mainBgColor;
    
    //change the secondary div container bg color to the selected random color
    let secondaryColorDisplay = document.querySelector(".secondary-color-display");
    let secondaryBgColor = colorsMap.get( primaryColorsArr[randPrimaryColorIndex]._secondaryColorsArr[randSecondaryColorIndex] );
    secondaryColorDisplay.style.backgroundColor = secondaryBgColor;

    //change the text color to the color name
    let mainColorText = document.getElementById("main-color-text");
    let secondaryColorText = document.getElementById("secondary-color-text");

    mainColorText.style.color = pSBC(-0.7, secondaryBgColor);
    secondaryColorText.style.color = pSBC(-0.7, mainBgColor);

    mainColorText.textContent = primaryColorsArr[randPrimaryColorIndex]._name;
    secondaryColorText.textContent = primaryColorsArr[randPrimaryColorIndex]._secondaryColorsArr[randSecondaryColorIndex];
}  

// alert user feature is coming soon
function displayUnderConstructionMsg(){
    alert("🚧 Coming Soon! 🚧 Please stay tuned for future updates! Thank you!");
}

window.onload = function (){
    load_colorsMap();
    load_PrimaryColors();
    load_SecondaryColors();

    //generate button
    const generate_buttonEl = document.getElementById("generate-button");
    generate_buttonEl.addEventListener("click", displayRandomColorCombo);

    //About me and feedback has not been set up; inform user when pressed
    const aboutEl = document.getElementById("about");
    aboutEl.addEventListener('click', displayUnderConstructionMsg);
    
    // const feedbackEl = document.getElementById("feedback");
    // feedbackEl.addEventListener('click', displayUnderConstructionMsg);
}