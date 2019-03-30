//function for game to start upon clicking start button.
$("#start").on("click", function(){
    $(this).hide();
    //Hides the start button window and displays the game container.
    $("#game").show();
    $("#timer").show();
    $("#subButton").show();
    countDown();
    render();
})

//Timer function
var seconds = 30;

function countDown(){
    var timer = setInterval(function(){
        seconds--;
        $("#timer").html(": " + seconds);
        console.log(seconds);
        if (seconds <= 0){
            clearInterval(timer);
            $("#message").html("Your watch has ended").show();
            $("#subButton").hide();
        }
    }, 1000);      
    return false; 
}

//Array containing questions, choices, and the correct answer.
var questions = [
    ["How many fingertips did Stannis chop off of Davos' hand?","One", "Two", "Three", "Four", "D"],
    ["Who is king of Westeros when the series begins?","Eddard Stark", "Aerys Targaryan", "Robert Baratheon", "Theon Greyjoy", "C"],
    ["At the end of his training, what must an unsullied kill to prove he has no weakness?","A baby calf", "A member of his training group", "A newborn child", "An elderly slave", "C"],
    ["What house is Catelyn Stark from?", "Baratheon", "Tyrell", "Targaryan", "Tully", "D"],
    ["What is the name of the person who chopped off Jaime's right hand?", "Locke", "Tyrion Lannister", "Breanne of Tarth", "The Mountain", "A"]
];//End of questions array.

var pos= 0; //records where the user is in the test.
var correct = 0;
var inCorrect= 0;
var chA;//contains individual answer
var chB;
var chC;
var chD;
var userChoice;//user's selected answer
var choices;//contains the possible answers
var quiz; //test div
var testStatus; //contains heading that displays the user's progress in the quiz.
 //grabs question from the array.

//grab elements from the web page.
function get(x){
    return document.getElementById(x);
  }
    
// Q & A Generator
function render(){
    test = $("#quiz");
    if (pos >= questions.length){
        $("#quiz").html("<h2>" + "You got " + correct + " of " + questions.length + " questions correct!</h2>" 
        + "<br>" + "<h2>" + "You got " + inCorrect + " of " + questions.length + " questions wrong!" + "<h2>");
        $("#testStatus").html("Test Completed");
        $("#re-start").show();
        
        //to stop the render function from continuing to run after the quiz has been completed...
        return false;
    }
    //Indicates which question the user is currently on in the quiz.
    $("#testStatus").html("Question " + (pos+1) + " of " + questions.length);
    //renders the question.
    var question = questions[pos][0];
    //renders each choice as a radio button within the quiz div.
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    $("#quiz").html("<h3>" + question + "</h3>");
    $("#quiz").append("<input type='radio' name='choices' value='A' class='button'> "+chA+"<br>");
    $("#quiz").append("<input type='radio' name='choices' value='B' class='button'> "+chB+"<br>");    
    $("#quiz").append("<input type='radio' name='choices' value='C' class='button'> "+chC+"<br>");
    $("#quiz").append("<input type='radio' name='choices' value='D' class='button'> "+chD+"<br>");
}

$("#re-start").on("click", function restart(){
    pos = 0;
    correct = 0;
    incorrect = 0;
    seconds = 30;
    render();
    $("#message").hide();
    $("#re-start").hide();
    $("#start").show();
});

//Check answer function to compare the user choice against the correct answer in the array.
function check(){
    var correctAns = questions[pos][5];
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++){
        if (choices[i].checked){
            userChoice = choices[i].value;
            console.log(correctAns);
            console.log(choices[i].checked);
            console.log(userChoice, "Choice");
        }
    }
    //correct answers increase if the user selection matches the correct answer located at the end of each array, pos 5.
    if (userChoice == correctAns){
        correct++;
    }
    //if the answers do not match, incorrect tally increase.
    else {
        inCorrect++;
    }
    //position changes and render function runs again to continue to next question.
    pos++;
    render();
}

var audio = new Audio();
audio.src = "assets/gameOfThrones.mp3";
audio.play();



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