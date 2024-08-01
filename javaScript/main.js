// Select Landin Page
let landingPage = document.querySelector(".landing-page")

let imgsArray = ["01.jpg", "02.jfif", "03.jfif", "04.jfif", "05.jpg"]

setInterval(() => {
    //Get Random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    //Change Bacground Image Url
    landingPage.style.backgroundImage = "url('../images/" + imgsArray[randomNumber] + "')"
},5000)