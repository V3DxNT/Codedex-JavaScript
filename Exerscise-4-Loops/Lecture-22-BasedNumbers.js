// Write code below 💖
let myNumber=45;
let binary="";

while(myNumber !=0)
{

    let remainder=myNumber%2;

    if(remainder == 0) binary="0"+binary;

    if(remainder == 1) binary="1"+binary;

    myNumber=Math.floor(myNumber/2);
}
console.log(binary);