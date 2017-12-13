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
      let entry1 = 50;
      totalAnswers.push(entry1);
      console.log(totalAnswers);
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
      let entry2 = 500;
      totalAnswers.push(entry2);
      console.log(totalAnswers);
  } else {
    alert("Sorry, Lets Try Again")
  }
});



/// third button prompts user amd records answer
$( "button.thirdQuestion" ).click(function() {
  let thirdAnswer = prompt( "For $1000: How many solutions are there to the equation x2 - 7 = 0?" );
  //needs to accept the user response and assign to  first answer
console.log(thirdAnswer);
  if (thirdAnswer === '1') {
      alert("Good Job");
      let entry3 = 1000;
      totalAnswers.push(entry3);
      console.log(totalAnswers);
  } else {
    alert("Sorry, Try Again")
  }
});

const totalAnswers = [];
totalAnswers.forEach(()=>{

})




});








