let textTag = document.querySelector(".section1 h1")
let text = textTag.textContent;
let splitedText = text.split('');
textTag.innerHTML = "";

for (let i = 0; i < splitedText.length; i++) {
    if (splitedText[i] == " ") {
        splitedText[i] = "&nbsp;";
    } 
    textTag.innerHTML += `<span>${splitedText[i]}</span>`
}

let k = 0;
let spans = textTag.querySelectorAll("h1 span");
let interval = setInterval(() => {
    spans[k].className = "fadeMove"
    k++;
    if (k === spans.length) { clearInterval(interval)}
}, 50);

let border = document.querySelector(".border-line");
let animationWidth = 0;
window.onscroll = () => {
    if (this.oldSrcoll > this.scrollY) { 
        animationWidth -= 2.6; } 
    else { animationWidth += 2.6;}

    if (animationWidth >= 100){ animationWidth = 100; }
    if (animationWidth <= 0){ animationWidth = 0; }
    
    border.style.width = animationWidth + "%";
    this.oldSrcoll = this.scrollY;
    
    imageAnimation()

}

const imageAnimation = () => {
    let sectionAnimation = document.querySelector(".section2 .images");
    let sectionPosition = sectionAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    console.log(sectionPosition)
    console.log(screenPosition)
    
    let leftImg = document.querySelector(".slideFromLeft");
    let rightImg = document.querySelector(".slideFromRight");

    if (sectionPosition < screenPosition) {
        leftImg.classList.add("animated");
        rightImg.classList.add("animated");
    }
}





