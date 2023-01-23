// Define variables

var highScores = document.querySelector("highscores");
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
var timerId;
var secondsLeft = 30;
var questionNumber = 0;
var questionCount = 1;
var timeRemaining =200;


// Click start button to start quiz

function oneSecondHandler() {
timeRemaining --;
time.innerText = timeRemaining; //show
}

function startTheQuiz() {
    setInterval(oneSecondHandler, 1000);
    time.innerText = timeRemaining;

    startScreen.setAttribute("class" , "hide");

}


startQuizButton.addEventListener("click", startTheQuiz);