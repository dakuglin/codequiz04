//Global Variables
//--------------------------------------------------------------------------------------------------------

var currentQuestionIndex = 0; //index for questionArray location

var secondsStart = 30; //seconds to take the quiz

var wrongAns = -5;

var questionArray = [ //object were I am storing all of the questions, button informaiton, and answers

    { 
    question: "What is the correct symbol for adding comments in JavaScript?",
    btnChoices: ["//", "<!--", "/*", "!!"],
    answer: "//",
    },
        
    {
    question: "What is an array?",
    btnChoices: ["A function", "A string","A collection of data", "A boolean"],
    answer: "A collection of data",
    },
            
    {
    question: "When was JavaScript created?",
    btnChoices: ["2020", "1995", "2018", "2000"],
    answer: "1995",
    },
            
    {
    question: "What symbol is used to denote a string in Javascript?",
    btnChoices: ["Brackets", "Curley brackets", "Carrots", "Parentheses"],
    answer: "Parentheses",
    },
        
]



// Functions 
//--------------------------------------------------------------------------------------------------------

function startQuiz() {

    dynamicQuestion(); //call this function to dispaly quiz presses the start button
 
    //countdown(); //start quiz countdown when start quiz button is pressed 

    //remove all the pre-quiz HTML content
    var hideVisible = document.getElementById("start-of-quiz"); // creating a variable for all of the content I want to remove/hide in JS when the quiz starts
        //hideVisible.setAttribute("class","hide")
    hideVisible.remove(); // removes the div in my HTML

    //show all of the post-quiz HTML content
    var showInvisible = document.getElementById("questions-buttons");
    showInvisible.removeAttribute("class");   

};


function dynamicQuestion() {

    if (currentQuestionIndex === questionArray.length) { //when we loop through 4 times
        endQuiz();
    }

    // starting at currentQuestionIndex of 0, global variable above
    var currentQuizQuestion = questionArray[currentQuestionIndex].question;
    //console.log(currentQuizQuestion)
   
    var questionElement = document.getElementById("questions"); // variable for where I will dynamically access the <h2> tag where the questions will go
    questionElement.textContent = currentQuizQuestion;
    //console.log(questionElement.textContent)

    dynamicButtons();
    
};


function dynamicButtons() {

    var currentQuizQuestion = questionArray[currentQuestionIndex];
    console.log(currentQuizQuestion);

    currentQuizQuestion.btnChoices.forEach(function(buttons) { 
        var dynamicButtonsEl = document.createElement("BUTTON");
        dynamicButtonsEl.setAttribute("questions", "buttons")
        dynamicButtonsEl.setAttribute("value",buttons)
        dynamicButtonsEl.textContent = buttons;
        document.body.appendChild(dynamicButtonsEl);
        dynamicButtonsEl.onclick = handleClickDynamicBtns;
    }) 

};



function handleClickDynamicBtns(e) {

    e.preventDefault();

    var dynamicBtnAns = questionArray[currentQuestionIndex].answer;
    
    var alertAns = document.getElementById("correct-incorrect");
    var answerChosen = e.target.getAttribute("value");
    //console.log(answerChosen)

    if (answerChosen !== dynamicBtnAns) { //.this refers to my questionArray object 
        alertAns.textContent = "Incorrect!"
        currentQuestionIndex++;
        dynamicQuestion();

    } else {
        alertAns.textContent = "Correct!"
        currentQuestionIndex++;
        dynamicQuestion()
    };


};


function endQuiz() {

    var clearQuestionHTML = document.getElementById("questions");
    clearQuestionHTML.remove();

    var clearButtonContent = document.getElementById("questions-buttons");
    //clearButtonContent.remove();
    clearButtonContent.setAttribute("class","hide");

    // // hide the questions and buttons
    var showInvisible = document.getElementById("questions-buttons");
    showInvisible.setAttribute("class","hide");
    
    // display the quiz ends screen
     var endScreen = document.getElementById("quiz-ends");
     console.log(endScreen)
     endScreen.removeAttribute("class");

};


// function countdown() {
 
//     timeEl = document.getElementById("time");

//     var countdown = setInterval(function(){
//         secondsStart--; //decrease time by 1 second
//         timeEl.textContent = secondsStart

//         if(secondsStart === 0) {
//             clearInterval(countdown);
//         } 
//         // else {
//         //     dynamicQuestion();
//         // }

//     }, 1000);
// }
   
 startQuizBtn.addEventListener("click", startQuiz); // when start button pressed quiz will start

 