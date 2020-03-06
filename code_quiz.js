
 $(document).ready(function() {

  
    var i;
  
    var answerA = ["A javaScript library.", "Connecting to a server.", "Terminal", "Copy", "<>", "Disregard Order Message", "%", "DOM", "The content looks good in most viewports, regardless of size.", "*"];
    var answerB = ["An API.", "Factory restart.", "Method", "Scroll", "::", "Days Over Minutes", "#", "Dividend", "The application functions without internet connection.", "$"];
    var answerC = ["A database.", "Styling HTML.", "Single", "Hover", "{}", "Document Object Model", "thisID*", "Element", "The user is expected to respond to a series of prompts.", "@"];
    var answerD = ["A question in Java.", "Mathematical applications.", "Round", "Click", "[]", "Data Ordering Model", "$", "Compartment", "Everything that is written is converted to audio wave files.", "&"];
    var question = ["What is jQuery?", "What is CSS used for?", "What is the term for a function within an object?", "Which of the following is not an example of an event.", "In javaScript, which kind of enclosure is used in an array?", "What do the letters in DOM stand for?", "In CSS, which of the following denotes an ID?", "A <div> is an example of an HTML ___________ .", "What is a common feature of a responsive layout?", "Which symbol is most commonly found as the intial character in code related to jQuery?"];

    var correctAnswer = [1, 3, 2, 1, 4, 3, 2, 3, 1, 2];
    var userAnswer = [];

    //hidden div


    $("#questions-prompt").hide();
    $("#high-scores-prompt").hide();
    $("#save-score-prompt").hide();


    //function to cycle through questions and answers


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
   

   


    var timeLeft = 100;
  
    var timeInterval = setInterval(function() {
      $("#time-left").text(timeLeft + " Seconds");
      timeLeft--;
  
      if (timeLeft === -1) {
        clearInterval(timeInterval);
        $("#questions-prompt").hide();
        $("#save-score-prompt").show();
      }

      if (i === answerA.length) {
        clearInterval(timeInterval); 
        timeLeft = 0;
        $("#time-left").text(timeLeft + " Seconds");
        $("#questions-prompt").hide();
        $("#save-score-prompt").show();
      
    }

    }, 1000);
  
  
  });

  $(".question-button").on("click", function newQuestion() {
      
    i++; 

   nextQuestion();


});

$("#start-again-button").on("click", function newGame() {
  i = 0;
  $("#starting-prompt").show();
  $("#save-score-prompt").hide();
  clearInterval(timeInterval); 

});

$("#checkbox-a").on("click", function logLetter() {
  userAnswer.push(1);
  console.log(userAnswer);
  x = userAnswer.length - 1;
  console.log(x);
 })

 $("#checkbox-b").on("click", function logLetter() {
  userAnswer.push(2);
  console.log(userAnswer);
 })

 $("#checkbox-c").on("click", function logLetter() {
  userAnswer.push(3);
  console.log(userAnswer);
 })

 $("#checkbox-d").on("click", function logLetter() {
  userAnswer.push(4);
  console.log(userAnswer);
 })


 });





  

