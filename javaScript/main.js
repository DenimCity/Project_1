$(document).ready(function () {
  console.log("The DOM is ready")


  alert("Welcome to GA Jeopardy")

  let newScore = 0

  $("div.button1").click(function () {
    firstAnswer = prompt("For $100: What is 100 divide 2?")
    if (firstAnswer === '50') {
      alert("Good Job")
      newScore += 100
    } else {
      alert("Sorry, Next Question")
      newScore -= 100
    }
  });


  $("div.button2").click(function () {
    secondAnswer = prompt("For $100: 5(-3x - 2) - (x - 3) = -4(4x + 5) + 13 ")
    if (secondAnswer === '0') {
      alert("Good Job")
      newScore += 100
    } else {
      alert("Sorry, Next Question")
      newScore -= 100
    }
  });

  $("div.button3").click(function () {
    thirdAnswer = prompt("For $200: How many solutions are there to the equation x2 - 7 = 0?")
    if (thirdAnswer === '1') {
      alert("Good Job");
      newsScore += 200
    } else {
      alert("Sorry, Try Again")
      newScore -= 200
    }
  });
  $("div.button3").click(function () {
    thirdAnswer = prompt("For $200: How many solutions are there to the equation x2 - 7 = 0?")
    if (thirdAnswer === '1') {
      alert("Good Job");
      newsScore += 200
    } else {
      alert("Sorry, Try Again")
      newScore -= 200
    }
  });
  $("div.button3").click(function () {
    thirdAnswer = prompt("For $200: How many solutions are there to the equation x2 - 7 = 0?")
    if (thirdAnswer === '1') {
      alert("Good Job");
      newsScore += 200
    } else {
      alert("Sorry, Try Again")
      newScore -= 200
    }
  });
  $("div.button3").click(function () {
    thirdAnswer = prompt("For $200: How many solutions are there to the equation x2 - 7 = 0?")
    if (thirdAnswer === '1') {
      alert("Good Job");
      newsScore += 200
    } else {
      alert("Sorry, Try Again")
      newScore -= 200
    }
  });
  $("div.button3").click(function () {
    thirdAnswer = prompt("For $200: How many solutions are there to the equation x2 - 7 = 0?")
    if (thirdAnswer === '1') {
      alert("Good Job");
      newsScore += 200
    } else {
      alert("Sorry, Try Again")
      newScore -= 200
    }
  });
  $("div.button3").click(function () {
    thirdAnswer = prompt("For $200: How many solutions are there to the equation x2 - 7 = 0?")
    if (thirdAnswer === '1') {
      alert("Good Job");
      newsScore += 200
    } else {
      alert("Sorry, Try Again")
      newScore -= 200
    }
  });

 



})








