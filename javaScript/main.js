$(document).ready(function () {
  console.log("The DOM is ready")

  //learn how to edit prompt in csss
  //alert is tackky no need, will return later
  // alert("Welcome to GA Jeopardy")

  let newScore = 0
  $("div.button1").click(function () {
    let answer = prompt("For $100: 2 * 25 ?")
    if (answer === '50') {
      alert("Good Job")
      newScore += 100
    } else {
      alert("Sorry, Next Question")
      newScore -= 100
    }
    $(".score").html(newScore);
    $("div.button1").unbind("click")
  });

  $("div.button2").click(function () {
    let answer = prompt("For $100: 10 divided by zero")
    if (answer === '0') {
      alert("Good Job")
      newScore += 100
    } else {
      alert("Sorry, Next Question")
      newScore -= 100
    }
    $(".score").html(newScore);
    $("div.button2").unbind("click");
  });

  $("div.button3").click(function () {
    let answer = prompt("For $200: Fifty divided by forty, gives a remainder of?")
    if (answer === '1') {
      alert("Good Job");
      newScore += 200
    } else {
      alert("Sorry, Next Question")
      newScore -= 200
    }
    $(".score").html(newScore);
    $("div.button3").unbind("click");
  });

  $("div.button4").click(function () {
    let answer = prompt("For $200: How many solutions are there to the equation x2 - 7 = 0?")
    if (answer === '1') {
      alert("Good Job");
      newScore += 200
    } else {
      alert("Sorry, Next Question")
      newScore -= 200
    }
    $(".score").html(newScore);
    $("div.button4").unbind("click");
  });

  $("div.button5").click(function () {
    let answer = prompt("For $500: A square patch of grass has a perimeter of 52 meters. How long is each side of the patch?")
    if (answer === '13') {
      alert("Good Job");
      newScore += 500
    } else {
      alert("Sorry, Next Question")
      newScore -= 500
    }
    $(".score").html(newScore);
    $("div.button5").unbind("click");
  });

  $("div.button6").click(function () {
    let answer = prompt("For $500: How many solutions are there to the equation x2 - 7 = 0?")
    if (answer === '1') {
      alert("Good Job");
      newScore += 500
    } else {
      alert("Sorry, Next Question")
      newScore -= 500
    }
    $(".score").html(new Score);
    $("div.button6").unbind("click");
  });

  $("div.button7").click(function () {
    let answer = prompt("For $1000: How many solutions are there to the equation 15 +3 -1 / 7 = 0?")
    if (answer === '1') {
      alert("Good Job");
      newScore += 1000
    } else {
      alert("Sorry, Next Question")
      newScore -= 1000
    }
    $(".score").html(newScore);
    $("div.button7").unbind("click");
  });

  $("div.button8").click(function () {
    let answer = prompt("For $1000: How many last names?")
    if (answer === '1') {
      alert("Good Job");
      newScore += 1000
    } else {
      alert("Sorry, Next Question")
      newScore -= 1000
    }
    $(".score").html(newScore);
    $("div.button8").unbind("click");
  })

  $('.button').click(function () {
    location.reload();
  });
//alerting winner funciton
  const winner = () => {
    if (newSocre ==200){
      alert("WINNER CHICKEN DINNER")
    } else {
      alert('You got this, Let try again')
    }
  }
    

})




