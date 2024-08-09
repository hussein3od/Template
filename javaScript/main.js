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

        handleActive(e)

    })
})

let randomBackEl = document.querySelectorAll(".random-backgrounds span")

randomBackEl.forEach(span => {

    span.addEventListener("click", (e) => {

    handleActive(e)

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

let imgsArray = ["01.jpg", "08.jfif", "03.jfif", "04.jfif", "05.jpg"]

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

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    let skillsOffsetTop = ourSkills.offsetTop;

    let skillsOuterHeight = ourSkills.offsetTop;
    let windowHeight = this.innerHeight;
    let windowScrollTop = scrollY
    
    if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight - 620)){
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span")

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress
        })
    }
}

let ourGalary = document.querySelectorAll(".galary img")

ourGalary.forEach(img => {

    img.addEventListener("click", (e) => {
        let overLay = document.createElement("div");

        overLay.className = "popup-overLay";

        document.body.appendChild(overLay)

        let popupBox = document.createElement("div")
    
        popupBox.className = "popupBox";
        
        if(img.alt !== null){
            let imgHeading = document.createElement("h3");
            let imgText = document.createTextNode(img.alt);
            imgHeading.appendChild(imgText)
            popupBox.appendChild(imgHeading)
        }
        let popupImage = document.createElement("img");
        
        popupImage.src = img.src;
        
        popupBox.appendChild(popupImage);
        
        document.body.appendChild(popupBox)
        
        let closeButton = document.createElement("span")
        closeButton.innerHTML = "X";
        closeButton.className = "close-button"
        popupBox.appendChild(closeButton)
        closeButton.onclick = function () {
            popupBox.style.display = "none";
            overLay.style.display = "none"
        }

    })

})

let allBullets = document.querySelectorAll(".nav-bullets .bullet")
let allLinks = document.querySelectorAll(".links a")

function scrollToSomeWhere(element) {
    element.forEach(ele => {
        ele.addEventListener("click", (e) => {
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}
scrollToSomeWhere(allBullets)
scrollToSomeWhere(allLinks)

function handleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active")
    });
    ev.target.classList.add("active")
}