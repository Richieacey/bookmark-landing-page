let title = document.querySelector('.container5>h2');
let tabImage = document.querySelector('.tab1-bg');
let bookmarkDescription = document.querySelector('.bookmark-desc');
let blueBackground = document.querySelector('.blue-bg2');
let speedySearchBtn = document.querySelector('.speedy-search');
let easySharingBtn = document.querySelector('.easy-sharing');
let simpleBookmarking = document.querySelector('.simple-bookmark');
let textInput = document.getElementById("email-value");
let errorMsg = document.querySelector(".error-msg");
let inputContainer = document.querySelector(".input-container");
let errorImage = document.querySelector(".input-container>img");
let faqArrowOne = document.querySelector(".faq1-arrow");
let faqSvgPathOne = document.querySelector(".svg-path1");
let faqOneAnswer = document.querySelector(".faq1-answer>p");
let faqArrowTwo = document.querySelector(".faq2-arrow");
let faqSvgPathTwo = document.querySelector(".svg-path2");
let faqTwoAnswer = document.querySelector(".faq2-answer>p");
let faqArrowThree = document.querySelector(".faq3-arrow");
let faqSvgPathThree = document.querySelector(".svg-path3");
let faqThreeAnswer = document.querySelector(".faq3-answer>p");
let faqArrowFour = document.querySelector(".faq4-arrow");
let faqSvgPathFour = document.querySelector(".svg-path4");
let faqFourAnswer = document.querySelector(".faq4-answer>p");
let closeButton = document.querySelector(".close-btn");
let mobileNavBar = document.querySelector(".mobile-nav-bar")
let hamBtn = document.querySelector(".ham-menu");
let bookmarkLogo = document.querySelector(".bookmark-logo");
let featuresTitleDesc = document.querySelector(".features-title-desc")
let container3 = document.querySelector(".container3")
let container5 = document.querySelector(".container5")
let container6 = document.querySelector(".container6")
let container7 = document.querySelector(".container7")
let tabOneBg = document.querySelector(".tab1-bg-container");
let faqTitleDesc = document.querySelector(".faq-title-desc")
let faq = document.querySelector(".faq");
let footer = document.querySelector("footer")
let container13 = document.querySelector(".container13");
let x = window.matchMedia("(max-width: 450px)")


speedySearchBtn.addEventListener("click", ()=>{
    title.textContent = "Intelligent search";
    bookmarkDescription.textContent = "Our powerful search feature will help you find saved sites in no time at all.\
    No need to trawl through all of your bookmarks."
    blueBackground.style.width = "40rem";
    tabImage.src = "images/illustration-features-tab-2.svg"
    tabImage.style.left = "200px";
    speedySearchBtn.style.borderBottom = "4px solid  hsl(0, 94%, 66%)";
    easySharingBtn.style.borderBottom = "2px solid  hsl(231, 19%, 86%)";
    simpleBookmarking.style.borderBottom = "2px solid  hsl(231, 19%, 86%)";
})

easySharingBtn.addEventListener("click", ()=>{
    title.textContent = "Share your bookmarks";
    bookmarkDescription.textContent = "Easily share your bookmarks and collections with others. Create a shareable \
    link that you can send at the click of a button."
    blueBackground.style.width = "36rem";
    tabImage.src = "images/illustration-features-tab-3.svg"
    tabImage.style.left = "200px";
    speedySearchBtn.style.borderBottom = "2px solid  hsl(231, 19%, 86%)";
    easySharingBtn.style.borderBottom = "4px solid  hsl(0, 94%, 66%)";
    simpleBookmarking.style.borderBottom = "2px solid  hsl(231, 19%, 86%)";
})

simpleBookmarking.addEventListener("click", ()=>{
    title.textContent = "Bookmark in one click";
    bookmarkDescription.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface \
    gives you complete control over how you manage your favourite sites."
    blueBackground.style.width = "31rem";
    tabImage.src = "images/illustration-features-tab-1.svg"
    tabImage.style.left = "80px";
    speedySearchBtn.style.borderBottom = "2px solid  hsl(231, 19%, 86%)";
    easySharingBtn.style.borderBottom = "2px solid hsl(231, 19%, 86%)";
    simpleBookmarking.style.borderBottom = "4px solid  hsl(0, 94%, 66%)";
})

textInput.addEventListener("input", function() {
    if(!textInput.value.includes(".com") || !textInput.value.includes("@")) {
        errorMsg.style.display = "block";
        inputContainer.style.backgroundColor = "hsl(0, 94%, 66%)";
        errorImage.style.display = "block";
        console.log(textInput.value);
    }else {
        errorMsg.style.display = "none";
        inputContainer.style.backgroundColor = "unset";
        errorImage.style.display = "none";
    }
})

faqArrowOne.addEventListener("click", toggleFaqOne)
faqArrowTwo.addEventListener("click", toggleFaqTwo)
faqArrowThree.addEventListener("click", toggleFaqThree)
faqArrowFour.addEventListener("click", toggleFaqFour)

// ONE
function toggleFaqOne() {
    if (faqOneAnswer.style.display == "none") {
        return openFaqOne();
    }else {
        return closeFaqOne();
    }


}

function openFaqOne() {
    faqArrowOne.setAttribute("style","transform: rotateX(180deg);")
    faqSvgPathOne.style.stroke = "hsl(0, 94%, 66%)";
    faqOneAnswer.style.display = "block";
}


function closeFaqOne() {
    faqArrowOne.setAttribute("style","transform: rotateX(0deg);")
    faqSvgPathOne.style.stroke = "#5267DF";
    faqOneAnswer.style.display = "none";
}

// TWO
function toggleFaqTwo() {
    if (faqTwoAnswer.style.display == "none") {
        return openFaqTwo();
    }else {
        return closeFaqTwo();
    }


}

function openFaqTwo() {
    faqArrowTwo.setAttribute("style","transform: rotateX(180deg);")
    faqSvgPathTwo.style.stroke = "hsl(0, 94%, 66%)";
    faqTwoAnswer.style.display = "block";
}


function closeFaqTwo() {
    faqArrowTwo.setAttribute("style","transform: rotateX(0deg);")
    faqSvgPathTwo.style.stroke = "#5267DF";
    faqTwoAnswer.style.display = "none";
}
// THREE
function toggleFaqThree() {
    if (faqThreeAnswer.style.display == "none") {
        return openFaqThree();
    }else {
        return closeFaqThree();
    }


}

function openFaqThree() {
    faqArrowThree.setAttribute("style","transform: rotateX(180deg);")
    faqSvgPathThree.style.stroke = "hsl(0, 94%, 66%)";
    faqThreeAnswer.style.display = "block";
}


function closeFaqThree() {
    faqArrowThree.setAttribute("style","transform: rotateX(0deg);")
    faqSvgPathThree.style.stroke = "#5267DF";
    faqThreeAnswer.style.display = "none";
}

// FOUR

function toggleFaqFour() {
    if (faqFourAnswer.style.display == "none") {
        return openFaqFour();
    }else {
        return closeFaqFour();
    }


}

function openFaqFour() {
    faqArrowFour.setAttribute("style","transform: rotateX(180deg);")
    faqSvgPathFour.style.stroke = "hsl(0, 94%, 66%)";
    faqFourAnswer.style.display = "block";
}


function closeFaqFour() {
    faqArrowFour.setAttribute("style","transform: rotateX(0deg);")
    faqSvgPathFour.style.stroke = "#5267DF";
    faqFourAnswer.style.display = "none";
}

if (x.matches) {
    blueBackground.style.width = "20rem";
}

closeButton.addEventListener("click", ()=>{
    mobileNavBar.style.display = "none";
    bookmarkLogo.style.opacity = "1";
    hamBtn.style.opacity = "1";
    featuresTitleDesc.style.display = "flex";
    container3.style.display = "flex";
    container5.style.display = "flex";
    tabOneBg.style.display = "flex";
    container6.style.display = "flex";
    container7.style.display = "flex";
    faqTitleDesc.style.display = "flex";
    faq.style.display = "block";
    footer.style.display = "flex";
    container13.style.display = "flex";
})

hamBtn.addEventListener("click", ()=>{
    mobileNavBar.style.display = "block";
    bookmarkLogo.style.opacity = "0";
    hamBtn.style.opacity = "0";
    featuresTitleDesc.style.display = "none";
    container3.style.display = "none";
    tabOneBg.style.display = "none";
    container5.style.display = "none";
    container6.style.display = "none";
    container7.style.display = "none";
    faqTitleDesc.style.display = "none";
    faq.style.display = "none";
    footer.style.display = "none";
    container13.style.display = "none";
})





