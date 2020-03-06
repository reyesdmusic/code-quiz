
 $(document).ready(function() {

    var i = 0;
    

    var answerA = ["A javaScript library.", "Connecting to a server.", "Terminal", "Copy"];
    var answerB = ["An API.", "Factory restart.", "Method", "Scroll"];
    var answerC = ["A database.", "Styling HTML.", "Single", "Hover"];
    var answerD = ["A question in Java.", "Mathematical applications.", "Round", "Click"];
    var question = ["What is jQuery?", "What is CSS used for?", "What is the term for a function within an object?", "Which of the following is not an example of an event."];


    function nextQuestion() {
    

    $("#question").text(question[i]);
    $("#checkbox-a").text(answerA[i]);
    $("#checkbox-b").text(answerB[i]);
    $("#checkbox-c").text(answerC[i]);
    $("#checkbox-d").text(answerD[i]);
    }

    $("#questions-prompt").hide();
    $("#high-scores-prompt").hide();
    $("#save-score-prompt").hide();

    
    

    $("#start-quiz").on("click", function setTime() {
    
    $("#starting-prompt").hide();
    $("#questions-prompt").show();

    nextQuestion();
   

    $(".question-button").on("click", function newQuestion() {
        i++; 
       nextQuestion();

       if (i === answerA.length) {
        $("#questions-prompt").hide();
        $("#save-score-prompt").show(); 
    }
    });


    var timeLeft = 60;
  
    var timeInterval = setInterval(function() {
      $("#time-left").text(timeLeft + " Seconds");
      timeLeft--;
  
      if (timeLeft === -1) {
        clearInterval(timeInterval);
        $("#questions-prompt").hide();
        $("#save-score-prompt").show(); 
      }
  
    }, 1000);
  });



 });





  

