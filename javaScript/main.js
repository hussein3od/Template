let mainColors = localStorage.getItem("color_option")

if(mainColors !== null){
    document.documentElement.style.setProperty("--main--color", mainColors)

    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active")

        if(element.dataset.color === mainColors){
            element.classList.add("active")
        }
    });
}
let backgroundOption = true;
let backgroundInterval;

let backgroundLocalStorageItem = localStorage.getItem("background_Option")

if(backgroundLocalStorageItem !== null){
    if(backgroundLocalStorageItem === "true"){
        backgroundOption = true
    }else{
        backgroundOption = false
    }
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active")
    });
    if(backgroundLocalStorageItem === "true") {
        document.querySelector(".random-backgrounds .yes").classList.add("active")
    }else{
        document.querySelector(".random-backgrounds .no").classList.add("active")
    }
}

let toggle = document.querySelector(".toggle");
let sittingsBox = document.querySelector(".sittings-box");
let sittingsIcon = document.querySelector(".icona")
toggle.onclick = function(){
    sittingsBox.classList.toggle("open")
    sittingsIcon.classList.toggle("fa-spin")
}

// Swich Colors
const colorLi = document.querySelectorAll(".colors-list li")

colorLi.forEach(li => {
    li.addEventListener("click", (e) => {
        
        document.documentElement.style.setProperty("--main--color", e.target.dataset.color)

        localStorage.setItem("color_option", e.target.dataset.color)

        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        });

        e.target.classList.add("active")
    })
})

let randomBackEl = document.querySelectorAll(".random-backgrounds span")

randomBackEl.forEach(span => {

    span.addEventListener("click", (e) => {

    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active")
    })
    e.target.classList.add("active")

    if(e.target.dataset.background === "yes"){
        backgroundOption = true;
        localStorage.setItem("background_Option", true)
        randomaizeImgs()
    }else{
        backgroundOption = false;
        localStorage.setItem("background_Option", false)
        clearInterval(backgroundInterval)
    }
    })
})

// Select Landin Page
let landingPage = document.querySelector(".landing-page")

let imgsArray = ["01.jpg", "02.jfif", "03.jfif", "04.jfif", "05.jpg"]

function randomaizeImgs() {
    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {
            //Get Random number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            //Change Bacground Image Url
            landingPage.style.backgroundImage = "url('../images/" + imgsArray[randomNumber] + "')"
        },5000)
    }
}
randomaizeImgs()