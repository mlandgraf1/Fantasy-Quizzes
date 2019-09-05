//the questions variable will hold an array which contains the 
//quiz questions, multiple choice options, and answers
var questions = [
    ["What is the name of the hobbit tasked with carrying the One Ring?", "Merry", "Pippin", "Frodo", "Sam", "C"],
    ["What is the name of the sword given to Frodo by Bilbo?", "Gut-Wrencher", "Cutter", "Dragoran", "Sting", "D"],
    ["Where does the great battle between Rohan and Isengard take place?", "Helm's Deep", "Osgiliath", "Mordor", "Minas Tirith", "A"],
    ["Which member of the Fellowship is killed protecting Merry and Pippin?", "Faramir", "Boromir", "Aragorn", "Legolas", "B"],
    ["What birthday is Bilbo celebrating at the beginning of 'The Fellowship of the Ring'?", "111", "100", "95", "133", "A"]
];

//variable to keep track of number of correct answers
var correct=0;
//variable containing the question from the 'questions' array
var question;
//variable to track where the user currently is in the quiz
var position=0;
//variables to hold the multiple choice options from the 'questions' array
var optionA, optionB, optionC, optionD;

//function to show the next question and its options from the array
function nextQuestion(){
    //assigns 'quiz' div element to quiz variable
    var quiz = document.getElementById("quiz");
    //assigns 'currentPlaceInQuiz' element to currentPlaceInQuiz variable
    var currentPlaceInQuiz = document.getElementById("currentPlaceInQuiz");
    //displays message saying quiz is completed if all of the questions have been answered
    if(position < questions.length){
        currentPlaceInQuiz.innerHTML = "Quiz Question "+(position+1)+" of "+questions.length+"</br></br>";
    }
    //displays message saying quiz is completed and showing score if all of the questions have been answered
    //different text and images are displayed depending on the score
    else{
        currentPlaceInQuiz.innerHTML = "You've finished the quiz!</br></br>";
        quiz.innerHTML = 'Score: '+correct+" out of "+questions.length+"</br></br>";
        if(correct == questions.length){
            quiz.innerHTML += "Agórel vae! That's Elvish for You did well!</br></br>";
            quiz.innerHTML += '<iframe src="https://giphy.com/embed/zGnnFpOB1OjMQ" width="480" height="215" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lord-of-the-rings-hobbits-shire-zGnnFpOB1OjMQ"></a></p>';
        }
        if(correct == questions.length-1 || correct == questions.length-2){
            quiz.innerHTML += 'Nice work! You deserve a nice pint from the Green Dragon!</br></br>';
            quiz.innerHTML += '<iframe src="https://giphy.com/embed/TcdpZwYDPlWXC" width="480" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reaction-laughing-lotr-TcdpZwYDPlWXC"></a></p>';
        }
        if(correct == 1 || correct == 2){
            quiz.innerHTML += "Let's hope Middle Earth doesn't descend into darkness because of this!</br></br>";
            quiz.innerHTML += '<iframe src="https://giphy.com/embed/1FR40e3b76Jnq" width="480" height="288" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lord-of-the-rings-gollum-moi-1FR40e3b76Jnq"></a></p>';
        }
        if(correct == 0){
            quiz.innerHTML += "No answers right? It's a crying shame!</br></br>"
            quiz.innerHTML += '<iframe src="https://giphy.com/embed/47ukyqqk1nEFq" width="480" height="333" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/the-lord-of-rings-our-47ukyqqk1nEFq"></a></p>';
        }
    }
    //variable for question containing the the first element of the array within the other array
    var question = questions[position][0];
    //assigns multiple choice options from array to variables
    var optionA = questions[position][1];
    var optionB = questions[position][2];
    var optionC = questions[position][3];
    var optionD = questions[position][4];
    //prints question
    quiz.innerHTML = question+"</br></br>";
    //prints  multiple choice options with radio buttons
    quiz.innerHTML += "<input type='radio' name='options' value='A'> "+optionA+"</br>";
    quiz.innerHTML += "<input type='radio' name='options' value='B'> "+optionB+"</br>";
    quiz.innerHTML += "<input type='radio' name='options' value='C'> "+optionC+"</br>";
    quiz.innerHTML += "<input type='radio' name='options' value='D'> "+optionD+"</br></br>";
    //creates button to advance to next question after internally checking if the answer was correct
    //button shows as 'submit' if user is on the last question
    if(position >= questions.length - 1){
        quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Quiz</button></br></br>";
    }
    else{
        quiz.innerHTML += "<button onclick='checkAnswer()'>Next Question</button></br></br>";
    };
}
//function to check if the answer selected by the user is right or wrong
function checkAnswer(){
    var options = document.getElementsByName("options");
    //loop that will check check what answer was checked by the user and assign it to 'option'
    for(var i=0; i<options.length; i++){
        if(options[i].checked){
            option=options[i].value;
        }
    }
    //the last element in the array within the array is the correct answer
    //so this will compare the user answer against this correct answer
    if(option==questions[position][5]){
        //if the answer is correct, the number of correct answers by the user increases by one
        correct = correct + 1;
    }
    //user's position in the quiz is advanced by one after answering each question
    position = position + 1;
    //call the nextQuestion function at the end to show the next question
    nextQuestion();
    //return the number of correct answers to the function call so the score can be displayed at the end
    return correct;
};