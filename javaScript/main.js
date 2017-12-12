$(document).ready(function(){
 console.log("The DOM is ready");
 
 
 alert("Welcome to GA Jeopardy")
 

//  let value1 = 0;
//  let value2 = 0;
//  let value3 = 0;

let secondAnswer = 200;
let thirdAnswer = 7000;
 
 
 
 /// ATTACH THIS TO THE FIRST BUTTON $100
 $( "button.firstQuestion" ).click(function() {
  let firstAnswer = prompt( "What is 100 divide 2" );
  //needs to accept the user response and assign to  first answer
 
console.log(firstAnswer);
  if (firstAnswer === '50') {
    //  document.getElementById("firstQuestion").innerHTML =
      alert("Good Job");
  } else {
    alert("Sorry, Try Again")
  }
});

//  $("firstQuestion").on('click', )
//  let firstQuestion = prompt("What is 100 divide 2?");
//  let firstAnswer = 50;
//  if (firstAnswer === 50) {
//     //  document.getElementById("firstQuestion").innerHTML =
//      alert("Good Job");
//  } else {
//    alert("sorry that was the wrong answer")
//  }
 
 /// ATTACH THIS TO THE second BUTTON $100
 // let secondAnswer = prompt("What is 50 multipled by 4 ?");
 // if (secondAnswer === 3) {
   
 //   document.getElementById("secondQuestion").innerHTML =
 //   "Hello " + person + "! How are you today?";
 // } else {
 // alert("sorry that was the wrong answer")
 
 /// ATTACH THIS TO THE FIRST BUTTON $100
 
 // let thirdAnswer = prompt("What is 100 divide 2?");
 // if (thirsAnswer === 3) {
 //   document.getElementById("thirdQuestion").innerHTML =
 //   "Hello " + person + "! How are you today?";
 // } else {
 // alert("sorry that was the wrong answer")
 
 
 // const totalNumbers = (value1, value2, value3) {
 //   submisionTotal = value1 + value2 +value3
 //   console.log(submisionTotal);
 // }
 // totalNumber(100,200,300);
 // console.log(` your totals score is ${totalNumber}`);
 
});








