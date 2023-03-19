// Define variables

var highScores = document.querySelector("#highscores");
var time = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen")
var startQuizButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var enterInitials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");

var questionNumber = 0;
var questionCount = 1;
var correctAnswer;

// Create timer

var timerId;
var timeRemaining = 60;
var interval;



// Click start button to start quiz

function oneSecondHandler() {
    timeRemaining --;
    time.innerText = timeRemaining; //start countdown clock
}

function startTheQuiz() {
    interval = setInterval(oneSecondHandler, 1000);
    time.innerText = timeRemaining;
    

    startScreen.setAttribute("class" , "hide"); //hide welcome screen
    questions.removeAttribute("class"); //show questions
    renderQuestion();
}

// Then present user with questions and choices

function renderQuestion() {

var currentQuestion = askQuestion [questionNumber]; //from question.js
    questionTitle.textContent = currentQuestion.questions;
    choices.innerHTML="";

for(var i=0; i < currentQuestion.choices.length; i++){
    var choice = currentQuestion.choices[i];
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = choice;
    choices.appendChild(choiceBtn);
    }
}
 // After question is answered, alert if answer is correct or incorrect

function choiceHandler(event){
    var btn = event.target;

    if(!btn.matches(".choice")){
        return;
    }

    if(btn.value !== askQuestion[questionNumber].correctAnswer){
        timeRemaining -= 10; // If answer is incorrect, deduct 10s from clock
    if(time < 0) {
        time = 0;
        
    }
    
    time.innerText = timeRemaining;
    alert ("Wrong answer! Press OK to continue")
    }
    else {
        alert ("Correct answer! Press OK to continue")    
    }

// Clear timer if time run out: 

    if (timeRemaining <= 0){
        clearInterval(interval);
        timeRemaining.textContent = "Time is up!";
        timeRemaining = 0
        time.innerText = timeRemaining;
    
// Or clear timer if all questions have been asked:

    }   else if(questionNumber >= askQuestion.length +1){
        clearInterval(interval);

        }

// End quiz if time is up or all questions are asked:

    questionNumber++;
    if (time <= 0 || questionNumber === askQuestion.length) {
        
        endQuiz();
        } else {
        renderQuestion();
        
      }
      
    }
    
    startQuizButton.addEventListener("click", startTheQuiz);
    choices.onclick = choiceHandler;

function endQuiz() {
    timeRemaining == 0 || questionNumber === askQuestion.length

endQuiz();

}   