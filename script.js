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


// Define questions (object)

var askQuestion = [
    {
        questions: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"]
    },


    {
        questions: "The condition of an if/ else statement is enclosed within ________.",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"]
    },

    {
        questions: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. parenthesis", "4. quotes"]

    },

    
    {
        questions: "The first index of an array is ____.",
        choices: ["1. 0", "2. 1", "3. 2", "4. 3"]  


    },

    {
        questions: "How do you create a function in JavaScript?",
        choices: ["1. function = myFunction()", "2. createMyFunction()", "3. function:myFunction()", "4. function myFunction()"]  

    }


];

function oneSecondHandler() {
timeRemaining --;
time.innerText = timeRemaining;
}

function startTheQuiz() {
    setInterval(oneSecondHandler, 1000);
    time.innerText = timeRemaining;


}
// Click start button to start quiz

startQuizButton.addEventListener("click", startTheQuiz);