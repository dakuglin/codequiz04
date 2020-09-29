// Global Variables
//----------------------------------------------------------------------------------------------------------------------------------------------------------

var questionArray = [ // object were I am storing all of the questions, button informaiton, and answers
    
    { 
    question: "What is the correct symbol for adding comments in JavaScript?",
    btns: ["//", "<!--", "/*", "!!"],
    answer: "correct Q1",
    },
        
    {
    question: "Question 2?",
    btns: ["incorrect", "incorrect","correct Q2", "incorrect"],
    answer: "correct Q2",
    },
            
    {
    question: "Question 3?",
    btns: ["incorrect", "correct Q3", "incorrect", "incorrect"],
    answer: "correct Q3",
    },
            
    {
    question: "Question 4?",
    btns: ["incorrect", "incorrect", "incorrect", "correct Q4"],
    answer: "correct Q4",
    },
        
]

var currentQuestionIndex = 0;



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
    
  
    questionButtonGenerator() // call this function to start the quiz after the user presses the start button
    buttons()
};

startQuizBtn.addEventListener("click", startQuiz); // when the user clicks the start quiz button my quiz will start

//startQuiz();

function questionButtonGenerator() {

    var currentQuestionIndex = 0; //global variable above, starting at 0 index

    var currentQuizQuestion = questionArray[currentQuestionIndex];
    //console.log(currentQuizQuestion);

    var questionElement = document.getElementById("questions"); // variable for where I will dynamically access the <h2> tag where the questions will go
    questionElement.textContent = currentQuizQuestion;
    console.log( questionElement.textContent);





    var currentQuizQuestion = questionArray[currentQuestionIndex];
    console.log(currentQuizQuestion);
    

    currentQuizQuestion.btns.forEach(function(btns) {  // specifically for iterating over an array (.forEach)

    console.log(btns);
   // var button = questionArray.btns
    console.log(btns);
    var btnTag = document.createElement("BUTTON");
    btnTag.setAttribute("btnQuestion",btns)
    btnTag.textContent = btns;
    //btnTag.innerHTML = questionArray.btns
    document.body.appendChild(btnTag);
})

    // for (var i=0; i <  questionArray.length; i++) {
    //     var currentQuizQuestion = questionArray[0].question;
    //     console.log(currentQuizQuestion);
    //     document.getElementById("questions").innerHTML = currentQuizQuestion
    // }
    //  for (var i=0; i <  questionArray.length; i++) {

    //     var btn = document.createElement("BUTTON");
    //     btn.setAttribute("class", btns)
    //     document.body.appendChild(btn[i]);  
     
    //  }
      
     
    //  document.body.appendChild(btn1);   
    //  var btn2 = document.createElement("BUTTON");
    //  document.body.appendChild(btn2);   
    //  btn2.innerHTML = "button 2"
    //  var btn3 = document.createElement("BUTTON");
    //  document.body.appendChild(btn3);   
    //  btn3.innerHTML = "button 3"
    //  var btn4 = document.createElement("BUTTON");
    //  document.body.appendChild(btn4);  
    //  btn4.innerHTML = "button 4" 

    // btnArray = [btn1, btn2, btn3, btn4];

    //  currentQuizQuestion.forEach(btnArray => {
    //     var btn = document.createElement("BUTTON");
    //     btn.setAttribute("class", "choice");
    //     btn.setAttribute("value", choice);

    //  var questions = document.getElementById("quesions");
    //  questions.innerHTML = alert('currentQuizQuestion');
};


function buttons() {

 //currentQuizQuestion = 1 ;

    // var currentQuizQuestion = questionArray[currentQuestionIndex];
    //     console.log(currentQuizQuestion);
        

    // currentQuizQuestion.btns.forEach(function(btns) {  // specifically for iterating over an array (.forEach)

    //     console.log(btns);
    //    // var button = questionArray.btns
    //     console.log(btns);
    //     var btnTag = document.createElement("BUTTON");
    //     btnTag.setAttribute("btnQuestion",btns)
    //     btnTag.textContent = btns;
    //     //btnTag.innerHTML = questionArray.btns
    //     document.body.appendChild(btnTag);
    // })

};

 
// startQuizBtn.addEventListener("click", quizQuestion);
 

// function click(){

// };

