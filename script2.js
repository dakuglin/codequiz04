
// Global Variables
//--------------------------------------------------------------------------------------------

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

btnArray = [btn1, btn2, btn3, btn4];


//___________________________________________________________________________________________

//function startQuiz () {
startQuizBtn.addEventListener("click", function startQuiz(){

    
    document.getElementById("startQuiz").style.visibility = 'hidden'; // hide start button when quiz starts

    document.getElementById("d1").style.visibility = "hidden"; 
    document.getElementById("d2").style.visibility = "hidden";
    document.getElementById("d3").style.visibility = "hidden";   


});


//     document.getElementById("questions").innerHTML = "What symbol is used for adding comments in JavaScript?";

//     //controls the visibility of the buttons for question 1 & what they say
//     btn1.style.visibility = "visible";
//     btn1.innerHTML = "//";
//     btn2.style.visibility = "visible";
//     btn2.innerHTML = "&&";
//     btn3.style.visibility = "visible";
//     btn3.innerHTML = "/* */";
//     btn4.style.visibility = "visible";
//     btn4.innerHTML = "!!";
// };
//startQuizBtn.addEventListener("click",startQuiz)



btn1.addEventListener("click", function questionOne() {

    //document.getElementById("startQuiz").style.visibility = 'hidden'; // hide start button when quiz starts
    
    // hides the directions once the start button is pressed

    document.getElementById("d1").style.visibility = "hidden"; 
    document.getElementById("d2").style.visibility = "hidden";
    document.getElementById("d3").style.visibility = "hidden";   

    document.getElementById("questions").innerHTML = "What symbol is used for adding comments in JavaScript?";

    //controls the visibility of the buttons for question 1 & what they say
    btn1.style.visibility = "visible";
    btn1.innerHTML = "//";
    btn2.style.visibility = "visible";
    btn2.innerHTML = "&&";
    btn3.style.visibility = "visible";
    btn3.innerHTML = "/* */";
    btn4.style.visibility = "visible";
    btn4.innerHTML = "!!";


        document.querySelectorAll(".Q").forEach(btnArray => {
        btn1.addEventListener("click", event => {
            btnArray =  document.getElementById("correct-wrong").innerHTML = "Correct!";
         });
         btn2.addEventListener("click", event => {
            btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
         });
         btn3.addEventListener("click", event => {
            btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
         });
         btn4.addEventListener("click", event => {
            btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
         });

        });

        //return questionOne;
});
//btn1.addEventListener("click", questionOne)

//___________________________________________________________________________________________
function questionTwo () {

    //document.getElementById("startQuiz").style.visibility = 'hidden'; // hide start button when quiz starts
        
    // hides the directions once the start button is pressed
    document.getElementById("d1").style.visibility = "hidden"; 
    document.getElementById("d2").style.visibility = "hidden";
    document.getElementById("d3").style.visibility = "hidden";   

    document.getElementById("questions").innerHTML = "Question 2 Here";

    //controls the visibility of the buttons for question 1 & what they say
    
    btn1.innerHTML = "incorrect";
    btn2.innerHTML = "incorrect";
    btn3.innerHTML = "correct";
    btn4.innerHTML = "incorrect";


   document.querySelectorAll(".Q").forEach(btnArray => {
   btn1.addEventListener("click", event => {
       btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
    });
    btn2.addEventListener("click", event => {
       btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
    });
    btn3.addEventListener("click", event => {
       btnArray =  document.getElementById("correct-wrong").innerHTML = "Correct!";
    });
    btn4.addEventListener("click", event => {
       btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
    });

});
            //btn1.addEventListener("click", questionTwo)

};
btn1.addEventListener("click", questionTwo)

//___________________________________________________________________________________________
function questionThree () {

    //document.getElementById("startQuiz").style.visibility = 'hidden'; // hide start button when quiz starts
        
    // hides the directions once the start button is pressed
    document.getElementById("d1").style.visibility = "hidden"; 
    document.getElementById("d2").style.visibility = "hidden";
    document.getElementById("d3").style.visibility = "hidden";   

    document.getElementById("questions").innerHTML = "Question 3 Here";

    //controls the visibility of the buttons for question 1 & what they say
    
    btn1.innerHTML = "incorrect";
    btn2.innerHTML = "correct";
    btn3.innerHTML = "incorrect";
    btn4.innerHTML = "incorrect";


   document.querySelectorAll(".Q").forEach(btnArray => {
   btn1.addEventListener("click", event => {
       btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
    });
    btn2.addEventListener("click", event => {
       btnArray =  document.getElementById("correct-wrong").innerHTML = "Correct!";
    });
    btn3.addEventListener("click", event => {
       btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
    });
    btn4.addEventListener("click", event => {
       btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
    });

});
        //btn1.addEventListener("click", questionThree)

};
btn1.addEventListener("click", questionThree)























// var questionAnswer = [

//     { 
//         question1: "What symbol is used for adding comments in JavaScript?"
//         btn1: "//",
//         btn2: "&&",
//         btn3: "/* */",
//         btn4: "!!",
//         answer: "btn1",
//     },

//     {
//         question2: "Question 2?"
//         btn1: "1",
//         btn2: "2",
//         btn3: "3",
//         btn4: "4",
//         answer: "btn3",
//     },

//     {
//         question3: "Question 3?"
//         btn1: "1",
//         btn2: "2",
//         btn3: "3",
//         btn4: "4",
//         answer: "btn2",
//     },

//     {
//         question4: "Question 4?"
//         btn1: "1",
//         btn2: "2",
//         btn3: "3",
//         btn4: "4",
//         answer: "btn4",
//     },
// ]


// Functions
//--------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------
// function startQuiz() {

//     document.getElementById("startQuiz").style.visibility = 'hidden'; // hide start button when quiz starts

//     // hides the directions once the start button is pressed
//     document.getElementById("d1").style.visibility = "hidden"; 
//     document.getElementById("d2").style.visibility = "hidden";
//     document.getElementById("d3").style.visibility = "hidden";   
// };
// startQuizBtn.addEventListener("click", startQuiz)


// startQuizBtn.addEventListener("click", function questionOne() {   

//     document.getElementById("questions").innerHTML =  "What symbol is used for adding comments in JavaScript?"

//     //controls the visibility of the buttons for question 1 & what they say
//     btn1.style.visibility = "visible";
//     btn1.innerHTML = "//";
//     btn2.style.visibility = "visible";
//     btn2.innerHTML = "&&";
//     btn3.style.visibility = "visible";
//     btn3.innerHTML = "/* */";
//     btn4.style.visibility = "visible";
//     btn4.innerHTML = "!!";

// });

// var test = document.querySelectorAll(".Q");
// console.log(test);



// document.querySelectorAll(".Q").forEach(btnArray => {
//     btn1.addEventListener("click", event => {
//         btnArray =  document.getElementById("correct-wrong").innerHTML = "Correct!";
//      })
//      btn2.addEventListener("click", event => {
//         btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
//      })
//      btn3.addEventListener("click", event => {
//         btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
//      })
//      btn4.addEventListener("click", event => {
//         btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
//      })

     
// });

// function questionTwo() {
     
//     if 
// };



// const buttons = document.querySelectorAll(".Q");
// console.log(buttons);
// for (const buttons of buttons) {
//     document.addEventListener("click", function questionTwo(){

//         document.getElementById("questions").innerHTML =  "Question 2!?"

//     })
// }


//---------------------------------------------------------------------------------------































// document.querySelectorAll("Q").addEventListener("click", function questionTwo() {
//      document.getElementById("questions").innerHTML =  "Question 2!?"

// });
//document.querySelectorAll(".Q").addEventListener("click" , function questionTwo() {


   

// });



// document.querySelectorAll(".Q").forEach(btn1 => {
//     btn1.addEventListener("click", event => {
//         event =  document.getElementById("correct-wrong").innerHTML = "Correct!";
//      })
     
// });

// btn1.addEventListener("click", function correctAnsQ1() {
//     //if (btn1 === true)
//     document.getElementById("correct-wrong").innerHTML = "Correct!"

// });



//ansQ1()

    //     //user is presented with first multiple choice question
        //  var questionquestionOne = "What symbol is used for adding comments in JavaScript?"

        //  return questionquestionOne;


    // startQuizBtn.addEventListener("click", function startQuiz(){



// });

    //document.getElementById("questions").innerHTML = questionOne();

//document.getElementById("startQuiz").style.visibility = 'hidden'; //hiding start button after the user starts the quiz    



