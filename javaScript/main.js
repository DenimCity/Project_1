$(document).ready(function () {
  console.log("The DOM is ready")

//score keeper
  let newScore = 0

  ///reset button
  $('.resetContainer').click(function() {
    location.reload();
});

 //game winner alert 
  // const complete =()=> {
  //   if (newScore >= 2000){
  //     alert("You've completed the board")
  //   }
  // }
  
  ///Button triggers
  $("li.button1").click(function () {
    let answer = prompt("For 100: 2 x 25 ?")
    if (answer === '50') {
      alert("Good Job")
      newScore += 100
    } else {
      alert("Sorry, Next Question")
      newScore -= 100
    }
    $(".points").html(newScore);
    $("li.button1").unbind("click")
    end()
  });

  $("li.button2").click(function () {
    let answer = prompt("For 100: What is 10 divided by 0 ?")
    if (answer === '0') {
      alert("Good Job")
      newScore += 100
    } else {
      alert("Sorry, Next Question")
      newScore -= 100
    }
    $(".score").html(newScore);
    $("li.button2").unbind("click");
    
  });

  $("li.button3").click(function () {
    let answer = prompt("For 200: Whats 25 + 2?")
    if (answer === '27') {
      alert("Good Job");
      newScore += 200
    } else {
      alert("Sorry, Next Question")
      newScore -= 200
    }
    $(".score").html(newScore);
    $("li.button3").unbind("click");
  });

  $("li.button4").click(function () {
    let answer = prompt("For 200: What's 7 - 3 ? ")
    if (answer === '4') {
      alert("Good Job");
      newScore += 200
    } else {
      alert("Sorry, Next Question")
      newScore -= 200
    }
    $(".score").html(newScore);
    $("li.button4").unbind("click");
  });

  $("li.button5").click(function () {
    let answer = prompt("For 500: What's 7 x 7 ")
    if (answer === '49') {
      alert("Good Job");
      newScore += 500
    } else {
      alert("Sorry, Next Question")
      newScore -= 500
    }
    $(".score").html(newScore);
    $("li.button5").unbind("click");
  });

  $("li.button6").click(function () {
    let answer = prompt("For 500: How many tires does a 18 wheeler have? ")
    if (answer === '18') {
      alert("Good Job");
      newScore += 500
    } else {
      alert("Sorry, Next Question")
      newScore -= 500
    }
    $(".score").html(new Score);
    $("li.button6").unbind("click");
  });

  $("li.button7").click(function () {
    let answer = prompt("For 1000: What's how many points are in a dozen")
    if (answer === '12') {
      alert("Good Job");
      newScore += 1000
    } else {
      alert("Sorry, Next Question")
      newScore -= 1000
    }
    $(".score").html(newScore);
    $("li.button7").unbind("click");
  });

  $("li.button8").click(function () {
    let answer = prompt("For 1000: Whats 5 + ( 3 x 5 )")
    if (answer === '20') {
      alert("Good Job");
      newScore += 1000
    } else {
      alert("Sorry, Next Question")
      newScore -= 1000
    }
    $(".score").html(newScore);
    $("li.button8").unbind("click");
  })  
})






