
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


let btnArray = [btn1, btn2, btn3, btn4]; // global variable 


// Functions
//----------------------------------------------------------------------------------------------
//______________________________________________________________________________________________
    // button will be on browser asking user if they would like to take a JS quiz
    // when button is pressed, quiz starts and timer starts
        
    startQuizBtn.addEventListener("click", function startQuiz() {

        document.getElementById("startQuiz").style.visibility = 'hidden'; // hide start button when quiz starts
        
        // hides the directions once the start button is pressed
        document.getElementById("d1").style.visibility = "hidden"; 
        document.getElementById("d2").style.visibility = "hidden";
        document.getElementById("d3").style.visibility = "hidden";   

        //document.getElementById("questions").innerHTML = questionOne();
        var start = questionOne();
        return start;
    });


    //startQuizBtn.addEventListener("click", startQuiz)
    function questionOne() { 

             //user is presented with first multiple choice question
            document.getElementById("questions").innerHTML = "What symbol is used for adding comments in JavaScript?"

           
            //controls the visibility of the buttons for question 2 & what they say
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
               //  if (event === btnArray[0]){
               //    alert("You got it correct!")
               //  };
             });
             btn2.addEventListener("click", event => {
                btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
               //  if (event === "&&") {

               //  };
             });
             btn3.addEventListener("click", event => {
                btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
             });
             btn4.addEventListener("click", event => {
                btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
             });

            });

        return questionOne;

    };

    btn1.addEventListener("click", questionTwo)

   
//___________________________________________________________________________________________


    function questionTwo () {

        document.getElementById("questions").innerHTML = "When was JavaScript created?";

          //controls the visibility of the buttons for question 2 & what they say
          btn1.innerHTML = "incorrect Q2";
          btn2.innerHTML = "incorrect Q2";
          btn3.innerHTML = "correct Q2";
          btn4.innerHTML = "incorrect Q2";
         
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
    

};
btn3.addEventListener("click", questionThree)

//___________________________________________________________________________________________

function questionThree () {

    document.getElementById("questions").innerHTML = "Is this working question three?";

      //controls the visibility of the buttons for question 2 & what they say
      
      btn1.innerHTML = "incorrect Q3";
      btn2.innerHTML = "correct Q3";
      btn3.innerHTML = "incorrect Q3";
      btn4.innerHTML = "incorrect Q3";
  

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

    //return questionThree;
    btn2.addEventListener("click", questionFour)
};

btn2.addEventListener("click", questionFour)


//___________________________________________________________________________________________

function questionFour () {

    document.getElementById("questions").innerHTML = "Is this working question four?";

      //controls the visibility of the buttons for question 2 & what they say
      
      btn1.innerHTML = "incorrect Q3";
      btn2.innerHTML = "incorrect Q3";
      btn3.innerHTML = "incorrect Q3";
      btn4.innerHTML = "correct Q3";
    

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
       btnArray =  document.getElementById("correct-wrong").innerHTML = "Correct!";
    });

   });

    //return questionThree;
    btn4.addEventListener("click", results)
};

btn4.addEventListener("click", results)



 function results() {

    document.getElementById("questions").innerHTML = "Congratulations on completing the quiz!";

    // hiding the buttons used for user to submit quiz answers
    btn1.style.visibility = "hidden";
    btn2.style.visibility = "hidden";
    btn3.style.visibility = "hidden";
    btn4.style.visibility = "hidden";
    

    document.getElementById("d3").style.color = "green";


 };




















































    //         document.querySelectorAll(".Q").forEach(btnArray => {
    //             btn1.addEventListener("click", event => {
    //                 btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
    //              })
    //              btn2.addEventListener("click", event => {
    //                 btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
    //              })
    //              btn3.addEventListener("click", event => {
    //                 btnArray =  document.getElementById("correct-wrong").innerHTML = "Correct!";
    //              })
    //              btn4.addEventListener("click", event => {
    //                 btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
    //              })
            
                 
    //         });
    //         return questionTwo;
    //     };
    
    // });

    
//___________________________________________________________________________________________

// btn3.addEventListener("click", function startquestion2() {

//     document.getElementById("questions").innerHTML = questionThree();

//     btn1.innerHTML = "incorrect";
//     btn2.innerHTML = "incorrct";
//     btn3.innerHTML = "correct";
//     btn4.innerHTML = "incorrect";


//     function questionThree() {

//         var questionThree = "When was javascript created?"
        
       
//         document.querySelectorAll(".Q").forEach(btnArray => {
//             btn1.addEventListener("click", event => {
//                 btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
//              })
//              btn2.addEventListener("click", event => {
//                 btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
//              })
//              btn3.addEventListener("click", event => {
//                 btnArray =  document.getElementById("correct-wrong").innerHTML = "Correct!";
//              })
//              btn4.addEventListener("click", event => {
//                 btnArray =  document.getElementById("correct-wrong").innerHTML = "Incorrect!";
//              })
        
             
//         });
//         return questionThree;
//     };

// });
   
















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


    

    // };
    
    // function gameOver () {
    //      // game is now over
    //         // ask user to save initials and score
    //         //ask if they would like to play again
