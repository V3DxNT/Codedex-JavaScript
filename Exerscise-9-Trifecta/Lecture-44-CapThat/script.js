// Write code below 💖
const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png",
    "https://i.imgur.com/WvG6ZfO.png",
    "https://i.imgur.com/D9C9ZcB.png",
    "https://i.imgur.com/4P5X8cK.png",
    "https://i.imgur.com/azFthZK.png"
];

const captionsArray = [
    "Reality called, so I hung up.",
    "Serving looks hotter than my coffee.",
    "Proof that I can do selfies better than adulting.",
    "Running on caffeine, chaos, and questionable decisions.",
    "Too glam to give a damn.",
    "Mentally on vacation, physically on the couch.",
    "When nothing goes right… go left.",
    "Collecting moments, not things… unless it’s snacks."
];

let randomMemeImg= document.querySelector("#random-meme");

let randomCaptionHeading= document.querySelector("#random-caption");

let generateButtonElement= document.querySelector("#generator-button");

generateButtonElement.addEventListener("click",function(){
    let randomNum1= Math.floor(Math.random() *  3 ) + 1;
    let randomNum2= Math.floor(Math.random() *  3 ) + 1;
    randomMemeImg.src=memeArray[randomNum1];
    randomCaptionHeading.innerText=captionsArray[randomNum2];

})