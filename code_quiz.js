$(document).ready(function() {

    //these are arrays of the questions and answers

    var answerA = ["A javaScript library.", "Connecting to a server.", "Terminal", "Copy", "<>", "Disregard Order Message", "%", "DOM", "The content looks good in most viewports, regardless of size.", "*"];
    var answerB = ["A user manual.", "Factory restart.", "Method", "Scroll", "::", "Days Over Minutes", "#", "Dividend", "The application functions without internet connection.", "$"];
    var answerC = ["A database.", "Styling HTML.", "Single", "Hover", "{}", "Document Object Model", "thisID*", "Element", "The user is expected to respond to a series of prompts.", "@"];
    var answerD = ["A question in Java.", "Mathematical applications.", "Round", "Click", "[]", "Data Ordering Model", "$", "Compartment", "Everything that is written is converted to audio wave files.", "&"];
    var question = ["What is jQuery?", "What is CSS used for?", "What is the term for a function within an object?", "Which of the following is not an example of an event.", "In javaScript, which kind of enclosure is used in an array?", "What do the letters in DOM stand for?", "In CSS, which of the following denotes an ID?", "A <div> is an example of an HTML ___________ .", "What is a common feature of a responsive layout?", "Which symbol is most commonly found as the intial character in code related to jQuery?"];
   

    //these are the correct responses that will later be compared to the users' resposnes

    var correctAnswer = [1, 3, 2, 1, 4, 3, 2, 3, 1, 2];

    //each correct response will push an item into the keepScore array. At the end, the length of this array will be divided by the number of questions (10) and multiplied by 100 to return the user's score.

    var keepScore = [];
    
    //these arrays will hold the user's names and scores which will then be stored in Local Storage.
    
    var userHighScores = [];
    var storedUserNames = [];
 
    //these are the divs that let the user know if the previous answer was correct or incorrect. Depending on the response the appropriate div will be shown.
  
    $('#correct').prepend('<img id="hey" src="assets/images/hey.png" />').prepend('<img id="checkmark" src="assets/images/checkmark.png" />');
    $('#incorrect').prepend('<img id="ohno" src="assets/images/ohno.png" />').prepend('<img id="xmark" src="assets/images/xmark.png" />');
    
    
    
    // these are all the divs that will be hidden until they need to be shown.
    
    $("#correct").hide();
    $("#incorrect").hide();
    $("#questions-prompt").hide();
    $("#high-scores-prompt").hide();
    $("#save-score-prompt").hide();
  

    //this function will display the questions and answers in the questions prompt div. It grabs the info from the arrays declared up top.

    var i;

    function nextQuestion() {
        $("#question").text(question[i]);
        $("#checkbox-a").text(answerA[i]);
        $("#checkbox-b").text(answerB[i]);
        $("#checkbox-c").text(answerC[i]);
        $("#checkbox-d").text(answerD[i]);
    }
  
    //upon clicking "start quiz" the timer starts to count down and the first question and answers are displayed

    $("#start-quiz").on("click", function setTime() {

        $("#starting-prompt").hide();
        $("#questions-prompt").show();
        i = 0;
        nextQuestion();

        var timeLeft = 30;
      
        var timeInterval = setInterval(function() {
          
          $("#time-left").text(timeLeft + " Seconds");
          timeLeft--;
  
    //if the clock runs out, stop the clock and display 0 seconds on the timer

          if (timeLeft <= 0) {
            clearInterval(timeInterval);
            $("#time-left").text(0 + " Seconds");

    //hide the questions prompt, calculate the score, show score

            $("#questions-prompt").hide();
            var yourScore = keepScore.length / 10  * 100;
            $("#your-score").append("Your score is " + yourScore + "%");
            $("#save-score-prompt").show();

    //save user name 
              
                $("#user-submit-button").on("click", function(event) {
                event.preventDefault();
                $("#save-score-prompt").hide();
                userName = $('#user-name').val();

    //get previously saved entries off local storage
              
                var theseNames = JSON.parse(localStorage.getItem("storedNames"));


    //if there's nothing in there, stop the function. Otherwise, push the contents into storedUserNames array

                if (theseNames !== null) {
                  for (var i = 0; i < theseNames.length; i++) {
                    storedUserNames.push(theseNames[i]);
                    }
                }

    //now push the newly submitted user name into the array

                storedUserNames.push(userName);


    //now we store the updated storedUserNames array into Local Storage
            
                localStorage.setItem('storedNames', JSON.stringify(storedUserNames));

    //the following code, does the same for the user scores as was done for user names
                
                var theseScores = JSON.parse(localStorage.getItem("storedScores"));

                if (theseScores !== null) {
                  for (var i = 0; i < theseScores.length; i++) {
                    userHighScores.push(theseScores[i]);
                    }
                }
                userHighScores.push(yourScore);

                localStorage.setItem('storedScores', JSON.stringify(userHighScores));
    
    //now show the high-scores-prompt div and run the render function which grabs info from local storage and shows it here

                $("#high-scores-prompt").show();
                
                render();
              });

        }

    //the following does the same thing as the previous block of code but instead of on the condition of running out of time, it follows the condition that all the questions have been answered.
     
            else if (i === answerA.length) {
              clearInterval(timeInterval); 
              timeLeft = 0;
              $("#time-left").text(timeLeft + " Seconds");
              $("#questions-prompt").hide();
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

    //the following code takes the user's answer and puts it into the userAnswer array which compares it to the correct answer array up top.
    //after comparing the answer to the correct ones, the "Correct!" or "Incorrect!" div is shown
    //if the answer is correct, a value of 1 is pushed into the keepScore div which is then used to calculate the score
    
    var userAnswer = [];

    $("#checkbox-a").on("click", function logLetter() {
      userAnswer.push(1);
      x = userAnswer.length - 1;
        if (correctAnswer[x] === userAnswer[x]) {
        $("#correct").show();
        setTimeout(function() { $("#correct").hide(); }, 1000);
        keepScore.push(1);  
        }

        else {
          $("#incorrect").show();
          setTimeout(function() { $("#incorrect").hide(); }, 1000);
          timeLeft = timeLeft - 5;   
        }

      })

      $("#checkbox-b").on("click", function logLetter() {
        userAnswer.push(2);
        x = userAnswer.length - 1;
        if (correctAnswer[x] === userAnswer[x]) {

          $("#correct").show();
          setTimeout(function() { $("#correct").hide(); }, 1000);
          keepScore.push(1);
        }
          else {
        
            $("#incorrect").show();
            setTimeout(function() { $("#incorrect").hide(); }, 1000);
            timeLeft = timeLeft - 5;
          }

      })

      $("#checkbox-c").on("click", function logLetter() {
        userAnswer.push(3);
        x = userAnswer.length - 1;
        if (correctAnswer[x] === userAnswer[x]) {
      
          $("#correct").show();
          setTimeout(function() { $("#correct").hide(); }, 1000);
          keepScore.push(1);
        }
          else {
            
            $("#incorrect").show();
            setTimeout(function() { $("#incorrect").hide(); }, 1000);
            timeLeft = timeLeft - 5;
          }

      })

      $("#checkbox-d").on("click", function logLetter() {
        userAnswer.push(4);
        x = userAnswer.length - 1;
        if (correctAnswer[x] === userAnswer[x]) {

          $("#correct").show();
          setTimeout(function() { $("#correct").hide(); }, 1000);
          keepScore.push(1);
        }
          else {
            
            $("#incorrect").show();
            setTimeout(function() { $("#incorrect").hide(); }, 1000);
            timeLeft = timeLeft - 5;
          }

      }) 
  
  });

    //this cycles through the appropriate questions and answers in the arrays declared up top.

    $(".question-button").on("click", function newQuestion() {   
      i++;
    nextQuestion();
    });

    $("#start-again-button").on("click", function newGame() {
      location.reload();
    });

  });

    //go back button

    $("#go-back").on("click", function () {
      location.reload();
    })

    //clear scores button

    $("#clear-high-scores").on("click", function(){
      $("#high-scores").text("");
      localStorage.clear("storedScores");
      localStorage.clear("storedNames");
    })

    //high scores tab

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

//renders score intro the high scores prompt div, grabbing the info from local storage

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

