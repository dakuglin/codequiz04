
// Global Variables
//----------------------------------------------------------------------------------------------

var quizTime = 30; // need a variable for time

var startQuizBtn = document.getElementById("startQuiz");  

var btn1 = document.getElementById("btn1");
console.log(btn1);

btn1.style.visibility = "hidden"; // hiding my quiz buttons

var btn2 = document.getElementById("btn2");
console.log(btn2);

btn2.style.visibility = "hidden"; // hiding my quiz buttons

var btn3 = document.getElementById("btn3");
console.log(btn3);

btn3.style.visibility = "hidden"; // hiding my quiz buttons

var btn4 = document.getElementById("btn4");
console.log(btn4);

btn4.style.visibility = "hidden"; // hiding my quiz buttons






// var questionOneAnswer = document.getElementById("btn1").innerText;
// console.log(questionOneAnswer);

// var buttonSection = document.getElementsByClassName("card-body");
// console.log(buttonSection);

//var btn1 = document.getElementById("btn1").innerHTML;
//console.log(btn1DAK); // this is "Large button"
//btn1DAK = "NEW"
// var newbtn1 = btn1.append("//")
// console.log(btn)




// var userAnswer = document.getElementById("#userAnswer");
// console.log(userAnswer);

// var quizResults = document.getElementById("#quizResults");
// console.log(quizResults);

// var questions = [questionquestionOne, questionTwo];
// console.log(questions)



// Functions
//----------------------------------------------------------------------------------------------

// button will be on browser asking user if they would like to take a JS quiz

    // when button is pressed, quiz starts and timer starts
    startQuizBtn.addEventListener("click", function startQuiz() {

        document.getElementById("questions").innerHTML = questionOne();

        document.getElementById("d1").style.visibility = "hidden";
        document.getElementById("d2").style.visibility = "hidden";
        document.getElementById("d3").style.visibility = "hidden";
 

        //controls the visibility of the buttons for question 1 & what they say
        btn1.style.visibility = "visible";
         btn1.innerHTML = "//";
        btn2.style.visibility = "visible";
        btn2.innerHTML = "&&";
        btn3.style.visibility = "visible";
        btn3.innerHTML = "/* */";
        btn4.style.visibility = "visible";
        btn4.innerHTML = "!!";
     
        document.getElementById("startQuiz").style.visibility = 'hidden'; //hiding start button after the user starts the quiz    
    });




    //btn1.addEventListener("click", function ansQuestion1(){

        //alert("YES I DID IT")
        // document.getElementById("correct-wrong").innerHTML = "Correct!"

        // if (btn1.onclick === true) {
        //     alert("YES I DID IT AGAIN")
        //     //document.getElementById("correct-wrong").innerHTML = "Correct!"
        //  } 
        //  else {
        //     document.getElementById("correct-wrong").innerHTML = "Incorrect!"
        // }
    //});

    function questionOne() {   
    //     //user is presented with first multiple choice question
         var questionquestionOne = "What symbol is used for adding comments in JavaScript?"

         return questionquestionOne;
     };

     //document.getElementById("questions").innerHTML = questionOne();

    // questionOneAnswer.addEventListener("click", function questionOneAnswers(){
        
    //     if (document.getElementById("btn1").innerHTML.clicked ==true) {
    //         alert("correct")
    // //     }
    // });

 


    // buttonSection.addEventListener("click",function questionsLoop(){

    //     alert("this is working")
    // });
    
        // //var correctAns = document.getElementById("btn1").innerHTML = "//";
        // document.getElementById("btn1").innerHTML = "//";
        // document.getElementById("btn2").innerHTML = "&&";
        // document.getElementById("btn3").innerHTML = "/* */";
        // document.getElementById("btn4").innerHTML = "!!";

        // if (document.getElementById("btn1").innerHTML.clicked ==true) {
        //     alert("correct")
        // }



        // if (correctAns.onclick == true) {
        //     //document.getElementById("correct-wrong").innerHTML = "Correct!"
        //     alert("Correct!");
        //  } 
        //  else if (correctAns.onclicked == false) {
        //     //document.getElementById("correct-wrong").innerHTML = "Incorrect!"
        //     alert("Incorrect");
        //  };
     

  






    
       
    function questionTwo() {

        var questionquestionOne = "When was javascript invented?"
        return questionquestionOne;
        //var questionTwo = "Question 2?"
        // second multiple choice question appears
            //if correct, alerts Correct!
            //if wrong, alerts Wrong! and time decucts 
        //return questionTwo;
    };
   
    

    function questionThree() {
        // third multiple choice question appears
            //if correct, alerts Correct!
            //if wrong, alerts Wrong! and time decucts 

    };
       

    function questionFour() {
        // fourth multiple choice question appears
            //if correct, alerts Correct!
            //if wrong, alerts Wrong! and time decucts 


    };

    function questionFive() {
            // fifth multiple choice question appears
            //if correct, alerts Correct!
            //if wrong, alerts Wrong! and time decucts


    };
    
    function gameOver () {
         // game is now over
            // ask user to save initials and score
            //ask if they would like to play again

    };
       