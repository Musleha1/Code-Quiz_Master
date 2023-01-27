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

var timerId;
var questionNumber = 0;
var questionCount = 1;
var timeRemaining = 60;
var interval;
var correctAnswer;

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


function choiceHandler(event){
    var btn = event.target;

    if(!btn.matches(".choice")){
        return;
    }

    if(btn.value !== askQuestion[questionNumber].correctAnswer){
        timeRemaining -= 10;
    if(time < 0) {
        time = 0;
        
    }
    
    time.innerText = timeRemaining;
    alert ("Wrong answer! Press OK to continue")
    }
    else {
        alert ("Correct answer! Press OK to continue")    
    }

    if (timeRemaining <= 0){
        clearInterval(interval);
        timeRemaining.textContent = "Time is up!";
        timeRemaining = 0
        time.innerText = timeRemaining;
    

    }   else if(questionNumber >= askQuestion.length +1){
        clearInterval(interval);

        }

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

}
   
    endQuiz();

    



   



//check if timer run out: 
//call function endQuiz- stop timer
//