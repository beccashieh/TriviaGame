//function for game to start upon page loading
$(document).ready(function() {

//global variables:
var questionObj = [
    {
        question: "How many fingertips did Stannis chop off of Davos' hand?",
        choices: ["One", "Two", "Three", "Four"],
        correctAnswer: "Four"
    },
    {
        question: "Who is king of Westeros when the series began?",
        choices: ["Eddard Stark", "Aerys Targaryan", "Robert Baratheon", "Theon Greyjoy"],
        correctAnswer: "Robert Baratheon"
    },
    {
        question: "At the end of his training, what must an unsullied kill to prove he has no weakness?",
        choices: ["A baby calf", "A member of his training group", "A newborn child", "An elderly slave"],
        correctAnswer: "A newborn child"
    },
    {
        question: "What house is Catelyn Stark from?",
        choices: ["Baratheon", "Tyrell", "Targaryan", "Tully"],
        correctAnswer: "Tully"
    },
    {
        question: "What is the name of the person who chopped off Jaime's right hand?",
        choices: ["Locke", "Tyrion Lannister", "Breanne of Tarth", "The Mountain"],
        correctAnswer: "Locke"
    },
];
var correct = 0;
var inCorrect= 0;

//Populates each new question from the questionObj into the ".question" class html.
function quiz(){
    for (var i = 0; i < questionObj.length; i++){
        $(".question").html(questionObj[i].question);
        for (var j = 0; j < questionObj.length; j++){
            $("#test1").html(questionObj[i].choices[0]);
            $("#test2").text(questionObj[i].choices[1]);
            $("#test3").text(questionObj[i].choices[2]);
            $("#test4").text(questionObj[i].choices[3]);
        }
    }

    
    //function check(){
        //$("#after-submit").css("visibility", "visible");
        //$("#number-correct").html("You got " + correct + " correct and " + inCorrect + "incorrect!")
    }
quiz();
});


//Populates each corresponding choices array from the questionObj into the ".answer" class radio buttons.


//Sets up audio element
//var audioElement = document.createElement("audio");
//audioElement.setAttribute("src", "./assets/gameOfThrones.mp3");
// Theme Button-- plays music on click.
    //$(".theme-button").on("click", function() {
        //audioElement.play();
      //});

// Pause Button-- pauses music on click.
    //$(".pause-button").on("click", function() {
        //audioElement.pause();
      //});

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