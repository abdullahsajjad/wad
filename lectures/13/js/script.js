var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';

function displayNext() {
    /*Write your code here */
        if (document.getElementById(questions[currentQuestion].correctAnswer).checked);
        {
            correctAnswers++;
        }
    currentQuestion++;
    if(currentQuestion===3){
        quizOver=true;
        displayScore();
    }
    displayCurrentQuestion();
}

function displayCurrentQuestion() {
    /*Write your code here */
    var questionDisplay = document.getElementById("question");
    questionDisplay.innerHTML=questions[currentQuestion].question;
    var choicesDisplay = document.getElementById("choice-list");
    var ul = document.createElement('ul');
    choicesDisplay.innerHTML="";
    for(var i =0; i<4;i++){
        var li = document.createElement('li');
        li.innerHTML= '<input type="radio" name="radioButton" value="'+i+'" id="'+i+'">'+questions[currentQuestion].choices[i];
        ul.appendChild(li);
    }
    choicesDisplay.appendChild(ul);
    displayscore();
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}