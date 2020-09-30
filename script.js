// Global Variables
//----------------------------------------------------------------------------------------------------------------------------------------------------------

var questionArray = [ // object were I am storing all of the questions, button informaiton, and answers

    { 
    question: "What is the correct symbol for adding comments in JavaScript?",
    buttons: ["//", "<!--", "/*", "!!"],
    answer: "correct Q1",
    },
        
    {
    question: "Question 2?",
    buttons: ["incorrect", "incorrect","correct Q2", "incorrect"],
    answer: "correct Q2",
    },
            
    {
    question: "Question 3?",
    buttons: ["incorrect", "correct Q3", "incorrect", "incorrect"],
    answer: "correct Q3",
    },
            
    {
    question: "Question 4?",
    buttons: ["incorrect", "incorrect", "incorrect", "correct Q4"],
    answer: "correct Q4",
    },
        
]

var currentQuestionIndex = 0;
var secondsLeft = 30;

//var currentQuizQuestion = questionArray[currentQuestionIndex];
// console.log(currentQuizQuestion);

// Functions 
//----------------------------------------------------------------------------------------------------------------------------------------------------------

function startQuiz() {

    // dynamically remove all the pre-quiz HTML content   
    var startQuizBtn = document.getElementById("start-of-quiz");  // creating a variable for all of the content I want to remove/hide in JS when the quiz starts
    console.log(startQuizBtn);
    startQuizBtn.remove(); // removes the <div id="start-of-quiz" class="hideWhenQuizStarts"> in my HTML

    // dynamically show all of the post-quiz HTML content
    var contentStartQuiz = document.getElementById("show-When-Quiz-Starts");
    console.log(contentStartQuiz);
    //contentStartQuiz.style.   MAYBE TRY AND COME BACK FOR STYLING!!!!!!!!!!!!!!!!!!!!!
    contentStartQuiz = "visible";
    
  
    questions() // call this function to dispaly questions after the user presses the start button
    buttons() // call this function to display buttons after the user presses the start button
};

startQuizBtn.addEventListener("click", startQuiz); // when the user clicks the start quiz button my quiz will start


function questions() {

    //var currentQuestionIndex = 0; //global variable above, starting at 0 index

    var currentQuizQuestion = questionArray[currentQuestionIndex].question;
    console.log(currentQuizQuestion);

    var questionElement = document.getElementById("questions"); // variable for where I will dynamically access the <h2> tag where the questions will go
    questionElement.textContent = currentQuizQuestion;

};



function buttons() {

    var currentButtons = questionArray[currentQuestionIndex].buttons;
    console.log(currentButtons);
     
    currentButtons.forEach(function(buttons) {  // specifically for iterating over an array (.forEach)

        var dynamicButtons = document.createElement("BUTTON");
        dynamicButtons.setAttribute("dynamic-buttons", buttons)
        dynamicButtons.textContent = buttons;

        dynamicButtons.onclick = handleDynamicBtns()
    
        document.body.appendChild(dynamicButtons);
       
        buttons.onclick = handleDynamicBtns();

    })

};


function handleDynamicBtns() {

    var answer = questionArray[currentQuestionIndex].answer;

    console.log(answer);
     if (this.value !== questionArray[currentQuestionIndex].answer) { //.this refers to my questionArray object
       

        var alert = document.getElementById("correct-incorrect");
        console.log(alert);
        alert.textContent = "Incorrect!"
     } else {
         alert.textContent = "Correct!"
     }

      currentQuestionIndex++;

      //return currentQuestionIndex;
       

 };


function quizEnd() {

    if (quizTime ===0) {
        
    }

};



    
    timeEl = document.getElementById("time");

    var countdown = setInterval(function(){
        secondsLeft--; //decrease time by 1 second
        timeEl.textContent = secondsLeft

        if(secondsLeft ===0) {
            clearInterval(timeEl);
        }
    }, 1000);


    
    
    
//     document.log(countdown);

//     quizTime--;
//     countdown.textContent = time;
  
//     // check if user ran out of time
//     if (time <= 0) {
//       quizEnd();
//     }
//   }





 // for (var i=0; i < questionArray.length; i++); {

    //     var dynamicButtons = questionArraydocument.createElement("BUTTON");
    //     console.log(dynamicButtons)
    //     dynamicButtons.setAttribute("btnQuestions",buttons)
    //     dynamicButtons.textContent = buttons;
    //     dynamicButtons.innerHTML = currentButtons;
    //     console.log(dynamicButtons.innerHTML)
    //     document.body.appendChild(dynamicButtons);

    // }



    


    // for (var i=0; i <  questionArray.length; i++) {
    //     var currentQuizQuestion = questionArray[0].question;
    //     console.log(currentQuizQuestion);
    //     document.getElementById("questions").innerHTML = currentQuizQuestion
    // }
    //  for (var i=0; i <  questionArray.length; i++) {