let text = [
    "* Artist * Essayist * ScreenWriter *",
    "* Artist * Essayist * ScreenWriter *"
];



let banner = document.getElementById("bannerInner");

let xPosition = 10;
let speed = 1;
let textIndex = 0;

function runBanner() {
    setTextIndex();

    xPosition++;

    banner.style.marginLeft = xPosition + "px";
    banner.innerText = text[textIndex];
    setTimeout(runBanner, 50);
}

function setTextIndex() {
    if (xPosition > window.visualViewport.width) {
        xPosition = 0;
        textIndex++;
    }
    if (textIndex > text.length - 1) {
        textIndex = 0;
    }
}

runBanner();