//function for game to start upon page loading
$(document).ready(function() {

//global variables:
var questionObj = [
    {
        question: "How many fingertips did Stannis chop off of Davos' hand?",
        choices: ["One", "Two", "Three", "Four"],
        correctAnswer: 3
    },
    {
        question: "Who is king of Westeros when the series began?",
        choices: ["Eddard Stark", "Aerys Targaryan", "Robert Baratheon", "Theon Greyjoy"],
        correctAnswer: 2
    },
    {
        question: "At the end of his training, what must an unsullied kill to prove he has no weakness?",
        choices: ["A baby calf", "A member of his training group", "A newborn child", "An elderly slave"],
        correctAnswer: 2
    },
    {
        question: "What house is Catelyn Stark from?",
        choices: ["Baratheon", "Tyrell", "Targaryan", "Tully"],
        correctAnswer: 3
    },
    {
        question: "What is the name of the person who chopped off Jaime's right hand?",
        choices: ["Locke", "Tyrion Lannister", "Breanne of Tarth", "The Mountain"],
        correctAnswer: 0
    },
];
var correct = 0;
var inCorrect= 0;
var questionsAns= 0;

//Timer details
var intervalId;
var number= 30;

function run(){
    var number = 30;
    var timerCountdown = setInterval (function(){
        $("#timer").html(":" + number + " seconds left");
        number--
        if (number === 0){
            $("#message").html("Time's up!!!");
            console.log("Time's Up!");
            clearInterval(timerCountdown);
        }
    }, 1000);
       
}

run();




var myAnswer;


function quiz(){

    //Populates each new question from the questionObj into the ".question" class html.
    for (var i = 0; i < questionObj.length; i++){
        console.log(questionObj[i].correctAnswer);
        myAnswer = questionObj[i].correctAnswer;
        
        $(".question").html(questionObj[i].question);
        
        for (var j = 0; j < questionObj[i].choices.length; j++){
            console.log(j);
            
            $("#test1").html(questionObj[i].choices[0]);
            $("#test2").html(questionObj[i].choices[1]);
            $("#test3").html(questionObj[i].choices[2]);
            $("#test4").html(questionObj[i].choices[3]);

            $(".choice").on("click", function(){
                console.log(this);
                console.log(myAnswer);
            
                console.log($(this).attr("value"));
                if($(this).attr("value") == myAnswer){
                    correct++;
                    console.log("Hurray!");
                    $(this).css("background-color", "green");
                } else {
                    $(this).css("background-color", "red");
                    console.log("Boo!");

                }
                questionsAns++;
            })
        }
        
    }

    
    
    //check user selection against correctAnswer. 
    //if correct, turn button background to green.
        //correct++
    //if incorrect, turn button red.
        //incorrect++
    
    
    //function check(){
        //$("#after-submit").css("visibility", "visible");
        //$("#number-correct").html("You got " + correct + " correct and " + inCorrect + "incorrect!")
    }


quiz();
});


//Populates each corresponding choices array from the questionObj into the ".answer" class radio buttons.


//Sets up audio element
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/gameOfThrones.mp3");
// Theme Button-- plays music on click.
    $(".theme-button").on("click", function() {
        audioElement.play();
      });

// Pause Button-- pauses music on click.
    $(".pause-button").on("click", function() {
        audioElement.pause();
      });

//questions will show with 4 possible choices. 


    //timer will alot 30 seconds for each question. 
        //if no answer selected, will say "Time's up!", show correct answer and picture.
            //3 second timer for new question.
        //if answer selected and is correct, will say "Correct!" and show picture.
            //3 second timer for new question.
        //if answer selected and is incorrect, will say "Incorrect!" and show correct answer and picture.
            //3 second timer for new question.
//tally kept (hidden) for correct and incorrect guesses.
//tally will display after all questions have cycled through.
    //include a restart button that will reset the tally and start game over.