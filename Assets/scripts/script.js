let timerEl = document.getElementById('timer');
let buttonEl = document.getElementById('start-quiz');
let h1El = document.getElementById('responses');
let questionEl = document.getElementById('questions');
let mChoiceLi = document.getElementById('m-choice-list');
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


// Add click event to start quiz button
function startQuiz() {
    let paraEl = document.getElementById('welcome');
    console.log('clicked start quiz');
    paraEl.setAttribute('class', 'hide');
    questionEl.removeAttribute('class');
    changeQuestion();

    setInterval(() => {
        timerEl.innerHTML = `Time: ${score}`;
        score > 0 ? score-- : score = 0;
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
    this.value === questions[questIndex].correct ?
        score : 
        score >= 10 ? 
        score -= 10 :
        score = 0;
        
    questIndex++;
    
    if (questIndex === questions.length) {
        // end quiz function here
        questionEl.setAttribute('class', 'hide')
        endGame.removeAttribute('class');
        document.getElementById('show-score').innerHTML = score;
    } 
            // Else run this changeQuestion function
    changeQuestion();
    console.log('clicked a response');

}
buttonEl.onclick = startQuiz;
