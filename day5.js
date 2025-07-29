let enter = 6374395852
let number =/^[6-9]\d{10}&/;  //number pattern
if(number.test(enter.toString())){
    console.log("correct")
}
else{
    console.log("check your valid num")
}


let text="hi hello";
let match=/\b/w+\b\gi/;  //sring pattern
console.log( match ? text : 0)
console.log(text.length);