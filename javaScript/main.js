$(document).ready(function(){
 console.log("The DOM is ready");
 
 
 alert("Welcome to GA Jeopardy")
 
 /// first button prompts user amd records answer
 $( "button.firstQuestion" ).click(function() {
  let firstAnswer = prompt( "For $100: What is 100 divide 2?" );
  //needs to accept the user response and assign to  first answer
console.log(firstAnswer);
  if (firstAnswer === '50') {
      alert("Good Job"); 
      /// need to push the return value into an array
      const num1=[];
      let firstAnswer = num1[0];
      
    console.log(num1);
  } else {
    alert("Sorry, Try Again")
  }
});


/// second button prompts user amd records answer
$( "button.secondQuestion" ).click(function() {
  let secondAnswer = prompt( "For $500: 5(-3x - 2) - (x - 3) = -4(4x + 5) + 13 " );
  //needs to accept the user response and assign to  first answer
console.log(secondAnswer);
  if (secondAnswer === '0') {
      alert("Good Job");
    
  } else {
    alert("Sorry, Try Again")
  }
});



/// third button prompts user amd records answer
$( "button.thirdQuestion" ).click(function() {
  let thirdAnswer = prompt( "For $1000: Solve this question [7 - (6 - 4(5 - 4) + 7)] + 4" );
  //needs to accept the user response and assign to  first answer
console.log(thirdsAnswer);
  if (thirdAnswer === '2') {
      alert("Good Job");
    
  } else {
    alert("Sorry, Try Again")
  }
});



});








