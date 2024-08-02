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
        
        document.documentElement.style.setProperty("--main--color",e.target.dataset.color)
    })
})

// Select Landin Page
let landingPage = document.querySelector(".landing-page")

let imgsArray = ["01.jpg", "02.jfif", "03.jfif", "04.jfif", "05.jpg"]

setInterval(() => {
    //Get Random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    //Change Bacground Image Url
    landingPage.style.backgroundImage = "url('../images/" + imgsArray[randomNumber] + "')"
},5000)