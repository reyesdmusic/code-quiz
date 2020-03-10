
 $(document).ready(function() {

    
    var i;
    var answerA = ["A javaScript library.", "Connecting to a server.", "Terminal", "Copy", "<>", "Disregard Order Message", "%", "DOM", "The content looks good in most viewports, regardless of size.", "*"];
    var answerB = ["An API.", "Factory restart.", "Method", "Scroll", "::", "Days Over Minutes", "#", "Dividend", "The application functions without internet connection.", "$"];
    var answerC = ["A database.", "Styling HTML.", "Single", "Hover", "{}", "Document Object Model", "thisID*", "Element", "The user is expected to respond to a series of prompts.", "@"];
    var answerD = ["A question in Java.", "Mathematical applications.", "Round", "Click", "[]", "Data Ordering Model", "$", "Compartment", "Everything that is written is converted to audio wave files.", "&"];
    var question = ["What is jQuery?", "What is CSS used for?", "What is the term for a function within an object?", "Which of the following is not an example of an event.", "In javaScript, which kind of enclosure is used in an array?", "What do the letters in DOM stand for?", "In CSS, which of the following denotes an ID?", "A <div> is an example of an HTML ___________ .", "What is a common feature of a responsive layout?", "Which symbol is most commonly found as the intial character in code related to jQuery?"];
   
    var correctAnswer = [1, 3, 2, 1, 4, 3, 2, 3, 1, 2];

    var keepScore = [];
    
    var userHighScores = [];
    var storedUserNames = [];
 
  
    $('#correct').prepend('<img id="hey" src="assets/images/hey.png" />').prepend('<img id="checkmark" src="assets/images/checkmark.png" />');
    $('#incorrect').prepend('<img id="ohno" src="assets/images/ohno.png" />').prepend('<img id="xmark" src="assets/images/xmark.png" />');
    $("#questions-prompt").hide();
    $("#high-scores-prompt").hide();
    $("#save-score-prompt").hide();
    $("#correct").hide();
    $("#incorrect").hide();


    function nextQuestion() {
    
     
    $("#question").text(question[i]);
    $("#checkbox-a").text(answerA[i]);
    $("#checkbox-b").text(answerB[i]);
    $("#checkbox-c").text(answerC[i]);
    $("#checkbox-d").text(answerD[i]);
    }
  

    $("#start-quiz").on("click", function setTime() {

     

        $("#starting-prompt").hide();
        $("#questions-prompt").show();
        i = 0;
        nextQuestion();

    var timeLeft = 30;
  
    var timeInterval = setInterval(function() {
      $("#time-left").text(timeLeft + " Seconds");
      timeLeft--;
  
      if (timeLeft <= 0) {
        clearInterval(timeInterval);
        $("#time-left").text(0 + " Seconds");
        $("#questions-prompt").hide();
        var yourScore = keepScore.length / 10  * 100;
        $("#your-score").append("Your score is " + yourScore + "%");
        $("#save-score-prompt").show();
        $("#user-submit-button").on("click", function(event) {
          event.preventDefault();
          $("#save-score-prompt").hide();
         

          userName = $('#user-name').val();
         
         
         
          var theseNames = JSON.parse(localStorage.getItem("storedNames"));

          if (theseNames !== null) {
            for (var i = 0; i < theseNames.length; i++) {
              storedUserNames.push(theseNames[i]);
              }
          }

          storedUserNames.push(userName);
      
          localStorage.setItem('storedNames', JSON.stringify(storedUserNames));
          
          var theseScores = JSON.parse(localStorage.getItem("storedScores"));

          if (theseScores !== null) {
            for (var i = 0; i < theseScores.length; i++) {
              userHighScores.push(theseScores[i]);
              }
          }
          userHighScores.push(yourScore);

          localStorage.setItem('storedScores', JSON.stringify(userHighScores));
         
          $("#high-scores-prompt").show();
          render();
        });

        }

     else if (i === answerA.length) {
        clearInterval(timeInterval); 
        timeLeft = 0;
        $("#time-left").text(timeLeft + " Seconds");
        $("#questions-prompt").hide();
        console.log(keepScore.length);
        var yourScore = keepScore.length / 10  * 100;
        $("#your-score").append("Your score is " + yourScore + "%");
        $("#save-score-prompt").show();
        $("#user-submit-button").on("click", function(event) {
          event.preventDefault();
          $("#save-score-prompt").hide();
        
          userName = $('#user-name').val();
          score = yourScore;
         
      
          var theseNames = JSON.parse(localStorage.getItem("storedNames"));

          if (theseNames !== null) {
            for (var i = 0; i < theseNames.length; i++) {
          storedUserNames.push(theseNames[i]);
          }
        }

          storedUserNames.push(userName);
      
          localStorage.setItem('storedNames', JSON.stringify(storedUserNames));
          
          var theseScores = JSON.parse(localStorage.getItem("storedScores"));

          if (theseScores !== null) {
            for (var i = 0; i < theseScores.length; i++) {
              userHighScores.push(theseScores[i]);
              }
          }
          userHighScores.push(yourScore);
      
          localStorage.setItem('storedScores', JSON.stringify(userHighScores));    
        
          $("#high-scores-prompt").show();
        render();
        });
      
    }

    }, 1000);

    var userAnswer = [];
    console.log(userAnswer);

    $("#checkbox-a").on("click", function logLetter() {
  userAnswer.push(1);

  
  x = userAnswer.length - 1;
  if (correctAnswer[x] === userAnswer[x]) {
    console.log("Correct!");
    $("#correct").show();
    setTimeout(function() { $("#correct").hide(); }, 1000);
    keepScore.push(1);
    
  }
    else {
      console.log("Incorrect!");
      $("#incorrect").show();
      setTimeout(function() { $("#incorrect").hide(); }, 1000);
      timeLeft = timeLeft - 5;
      
    }

  })

 $("#checkbox-b").on("click", function logLetter() {
  userAnswer.push(2);
  x = userAnswer.length - 1;
  if (correctAnswer[x] === userAnswer[x]) {
    console.log("Correct!");
    $("#correct").show();
    setTimeout(function() { $("#correct").hide(); }, 1000);
    keepScore.push(1);
  }
    else {
      console.log("Incorrect!");
      $("#incorrect").show();
      setTimeout(function() { $("#incorrect").hide(); }, 1000);
      timeLeft = timeLeft - 5;
    }


 })

 $("#checkbox-c").on("click", function logLetter() {
  userAnswer.push(3);
  x = userAnswer.length - 1;
  if (correctAnswer[x] === userAnswer[x]) {
    console.log("Correct!");
    $("#correct").show();
    setTimeout(function() { $("#correct").hide(); }, 1000);
    keepScore.push(1);
  }
    else {
      console.log("Incorrect!");
      $("#incorrect").show();
      setTimeout(function() { $("#incorrect").hide(); }, 1000);
      timeLeft = timeLeft - 5;
    }


 })

 $("#checkbox-d").on("click", function logLetter() {
  userAnswer.push(4);
  x = userAnswer.length - 1;
  if (correctAnswer[x] === userAnswer[x]) {
    console.log("Correct!");
    $("#correct").show();
    setTimeout(function() { $("#correct").hide(); }, 1000);
    keepScore.push(1);
  }
    else {
      console.log("Incorrect!");
      $("#incorrect").show();
      setTimeout(function() { $("#incorrect").hide(); }, 1000);
      timeLeft = timeLeft - 5;
    }


 })
  
  
  });

  $(".question-button").on("click", function newQuestion() {
      
    i++; 

   nextQuestion();



});

$("#start-again-button").on("click", function newGame() {
  location.reload();
});


 });

$("#go-back").on("click", function () {
  location.reload();
})

$("#clear-high-scores").on("click", function(){
  $("#high-scores").text("");
  localStorage.clear("storedScores");
  localStorage.clear("storedNames");
})


$("#high-scores-tab").on("click", function() {
  $("#high-scores-prompt").show();
  $("#starting-prompt").hide();
  $("#questions-prompt").hide();
  $("#save-score-prompt").hide();
render();
 

  

})


function previousScores() {

  localStorage.getItem('storedScores', JSON.stringify(userHighScores));
}

function render() {
  
  var renderScore = JSON.parse(localStorage.getItem("storedScores"));
  var renderNames = JSON.parse(localStorage.getItem("storedNames"));
  $("#high-scores").html("");
  for (var i = 0; i < renderScore.length; i++) {
    thisScore = renderScore[i];
    thisName = renderNames[i];
    x = i + 1;
$("#high-scores").append("<li>" + "  " + x + ". " + thisName + "  |  " + thisScore + "</li>");
  }

}

