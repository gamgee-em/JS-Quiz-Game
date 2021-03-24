console.log('hello');
let timerEl = document.getElementById('timer');
let buttonEl = document.getElementById('start-quiz');
let mainEl = document.getElementById('switch')

let questions = [
    {
        title: 'Which is a Boolean Value?',
        answers: ['Hello', 'False', '36', 'false'],
        correct: 'false'
    },
    {
        title: 'What does the DRY principle stand for?',
        answers: ['Do Rocks Yawn', 'Don\'t Repeat Yourself', 'Don\'t Raise Yeti\'s', 'Definitely Raise Yeti\'s'],
        correct: 'Don\'t Repeat Yourself',
    },
    {
        title: 'Which is a String Value?',
        answers: ["'5'", '5' , 'true', 'NaN'],
        correct: "'5'",
    },
    {
        title: 'Which is an Array Method?',
        answers: ['makeMyCodeWork()','reduce()', 'toLowerCase()', 'codeMagic()'],
        correct: 'reduce()'
    }
];

// TIMER use a loop to decrement the --clock 
// and set score equal to clock after last question is answered
let timer = 120;
let score = timer;
// add click event to start quiz button
buttonEl.addEventListener('click', () => {
    setInterval(() => {
        timerEl.innerHTML = `Time: ${score}`;
        if (score > 0) {
            return score--;
        }
    }, 100);
// create an on click event function that targest the 
// #switch section and changes the h1 & p 
    mainEl.innerHTML = 

});