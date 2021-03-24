console.log('hello');
let timerEl = document.getElementById('timer');
let buttonEl = document.getElementById('start-quiz');

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

for (i of questions) {
    console.log(i.answers[0])
}

// TIMER use a loop to decrement the --clock 
// and set score equal to clock after last question is answered
let timer = 120;
let score = timer;
// add click event to start quiz button
buttonEl.addEventListener('click', function() {
    setInterval(function(){
        if (score > 0) {
        
            console.log(timer)
            score = timer--;
            timerEl.innerHTML = score;
            return score;
        }
        }, 1000);
    
     return score;
});