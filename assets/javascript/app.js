// Type javascript here

var questions = ({
    ques: "What sort of shoes does Clark suggest Andy should buy for Erin to wear to the newscaster audition he will be filming for her in his apartment?",
    ans: ["no shoes","high heels","open-toed heels","stilettos"],
    name: "clark",
    correct: "open-toed heels",
    divClass: ".clark"
},
{
    ques: "During his embarrassing Dundie award presentation, Michael covers a number of popular songs. To whom is Michael presenting a Dundie award when he sings along to 'You Sexy Thing' by '70s British funk band Hot Chocolate?",
    ans: ["Pam","Ryan","Jim","Pete"],
    name: "dundie",
    correct: "Ryan",
    divClass: ".dundie"
},
{
    ques: "In the episode 'Diversity Day', workers in the office undergo a training program on diversity. What is the reason for this needing to happen?",
    ans: ["Boyz N The Hood"," Chris Rock comedy routine","Not enough Diversity","Jim requested it to annoy co-workers"],
    name: "diversity",
    correct: "Chris Rock comedy routine ",
    divClass: ".diversity"
},
{
    ques: "In 'The Alliance' episode, Michael is asked by Oscar to donate to his nephew's walkathon for a charity. How much money does Michael donate, not realizing that the donation is per mile and not a flat amount?",
    ans: ["$20","$25","$35","$55"],
    name: "alliance",
    correct: "$25",
    divClass: ".alliance"
},
{
    ques: "What is Michael Scott's middle name?",
    ans: ["Greta","George","Gary","Gabe"],
    name: "micheal",
    correct: "Gary",
    divClass: ".micheal"
},
{
    ques: "This character became Jim's love interest after he moved to the Stamford branch in season three and joined the Scranton office during the merger. Who left the office to run her own branch when she discovered that Jim was still in love with Pam?",
    ans: ["April","Samantha","Karen","Sarah"],
    name: "jim",
    correct: "Karen",
    divClass: ".jim"
},
{
    ques: "In the episode 'Basketball', who does Michael say is on the team, 'of course'?",
    ans: ["Just himself","Stanley and himself","Ryan and himself","Stanley and Jim"],
    name: "basketball",
    correct: "Stanley and himself",
    divClass: ".basketball"
},
{
    ques: "In the very first scene of 'The Office', Michael asks Jim how things are going at which public place?",
    ans: ["Police station","Hospital","Library","Court house"],
    name: "theOffice",
    correct: "Library",
    divClass: ".theOffice" 
},
{
    ques: "Which other television show does NOT have an actor from their show guest star on 'The Office'?",
    ans: ["Mad Men","Scrubs","30 Rock","Reno 911"],
    name: "guests",
    correct: "Scrubs",
    divClass: ".guests"
},
{
    ques: "What is the exclusive club that Pam, Oscar, and Toby establish in the episode 'Branch Wars'?",
    ans: ["No Michaels Club","Scranton Book Club","Beet Tasters","Finer Things Club"],
    name: "club",
    correct: "Finner Thing Club",
    divClass: ".club" 
}
) // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each urName button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="urName"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & urNameName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:urName[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & urNameName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:urName[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answer').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); 