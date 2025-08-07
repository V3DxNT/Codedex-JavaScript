// Write code below 💖
const dnaPieces = ["A", "C", "G", "T"];
let myDNA=[];
for(let i =0;i<24;i++)
{
    let random1=Math.floor(Math.random() * 4)
    let random2=Math.floor(Math.random() * 4);
    let random3=Math.floor(Math.random() * 4);
    let dnaString=dnaPieces[random1]+dnaPieces[random2]+dnaPieces[random3];
    myDNA.push(dnaString);
}
console.log(myDNA);
