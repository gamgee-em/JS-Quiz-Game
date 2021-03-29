let timerEl = document.getElementById('timer');
let buttonEl = document.getElementById('start-quiz');
let h1El = document.getElementById('responses');
let questionEl = document.getElementById('questions');
let mChoiceLi = document.getElementById('m-choice-list');
let showScore = document.getElementById('show-score');
let submitName = document.getElementById('save-name');
let submitScore = document.getElementById('save-score');
let highScoreList = document.querySelector('.high-score-list');
let userScoreArr;
let questIndex = 0;
let timer = 50;
let score = timer;

let questions = [
    {
        title: 'Which is a Boolean data type?',
        responses: ['Hello', '"False"', '36', 'false'],
        correct: 'false'
    },
    {
        title: 'What does the DRY principle stand for?',
        responses: ['Do Rocks Yawn', 'Don\'t Repeat Yourself', 'Don\'t Raise Yeti\'s', 'Definitely Raise Yeti\'s'],
        correct: 'Don\'t Repeat Yourself',
    },
    {
        title: 'Which is a String data type?',
        responses: ["'5'", 5 , 'true', 'NaN'],
        correct: "'5'",
    },
    {
        title: 'Which is an Array Method?',
        responses: ['pleaseWork()','reduce()', 'toLowerCase()', 'codeMagic()'],
        correct: 'reduce()'
    }
];

// Try switching to ternery if there's time
// get local storage data if it exists if not create empty array
// for local storage
localStorage.getItem("localUserScore") ?
    userScoreArr = JSON.parse(localStorage.getItem("localUserScore")) :
    userScoreArr = [];
/* if (localStorage.getItem("localUserScore")) {
    userScoreArr = JSON.parse(localStorage.getItem("localUserScore"));
} else {
    userScoreArr = [];
} */

// Add click event to start quiz button
function startQuiz(event) {
    event.stopPropagation();
    let paraEl = document.getElementById('welcome');
    console.log('clicked start quiz');
    //hide welcome content
    paraEl.setAttribute('class', 'hide');
    questionEl.removeAttribute('class');

    changeQuestion();

    let timeInterval = setInterval(() => {
        timerEl.innerHTML = `Time: ${score}`;
        score > 0 ?
        score-- : clearInterval(timeInterval);

    }, 1000);
};

function changeQuestion() {
    let question = questions[questIndex];    
    h1El.textContent= question.title;
    mChoiceLi.innerHTML = "";
    console.log(questions[questIndex].correct)

    question.responses.forEach(function (response, i) {
        let button = document.createElement('button');

        button.setAttribute('class', 'response');
        button.setAttribute('value', response);
        button.textContent = i + 1 + '. ' + response;
        button.onclick = clickQuestion;
        mChoiceLi.appendChild(button);
    });
}
    
function clickQuestion() {
    
    let endGame = document.getElementById('end-game');
    // reset timer to 0 if last question is wrong and timer 
    // has less than 10 seconds
/*      timerEl.innerHTML = `Time: ${score}`;
 */ 
    this.value === questions[questIndex].correct ?
        score : 
        score >= 10 ? 
        score -= 10 :
        score = 0;

    questIndex++;

    // end quiz function here
    if (questIndex === questions.length) {
        
        timerEl.innerHTML = `Time: ${showScore.innerHTML}`;
        questionEl.setAttribute('class', 'hide')
        endGame.removeAttribute('class');
        showScore.innerHTML = score;
    } 

     // Else run this changeQuestion function
    changeQuestion();
}

// write function to store user information locally
function storageHandler(event) {
 event.preventDefault();
    let storeScore = score;
    // create object to store users high score to localstorage
    var userHighScore = {
        initials: userInit.value.toUpperCase().trim(),
        // change score value
        score: showScore.innerHTML
    };
    userScoreArr.push(userHighScore);
    //sort user scores high to low
    userScoreArr.sort(function (a, b) { 
        return b.score - a.score;
    });
    // convert userScoreArr to a json string object
    localStorage.setItem("localUserScore", JSON.stringify(userScoreArr));
    // update highscore info in browswer
    submitName.innerHTML = userHighScore.initials;
    submitScore.innerHTML = userHighScore.score;
    showHighScores();
}

//remove hide class and show highscores.
function showHighScores() {
    highScoreList.removeAttribute('class')

}
buttonEl.onclick = startQuiz;
document.querySelector("#submitButton").onclick = storageHandler;