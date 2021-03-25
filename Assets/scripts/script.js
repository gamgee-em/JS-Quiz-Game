let timerEl = document.getElementById('timer');
let buttonEl = document.getElementById('start-quiz');
let mainEl = document.getElementById('switch');
let h1El = document.getElementById('question');
let paraEl = document.getElementById('welcome');

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
    buttonEl.classList.add('hide');
    paraEl.classList.add('hide')
    setInterval(() => {
        timerEl.innerHTML = `Time: ${score}`;
        if (score > 0) {
            return score--;
        }
    }, 1000);

    let question = questions[0];
    console.log(question)

    for (let i = 0; i < questions.length; i++) {
        console.log(question.answers[0])
        let answers = question.answers[i];
        let li = document.createElement('li');

        h1El.textContent= question.title;
        li.textContent = answers;

        document.querySelector('#m-choice').appendChild(li);
    }
    
});
/* 
    questions.forEach((question, i) => {
        h1El.textContent= question.title;
        let answers = question.answers[i];
        console.log(question)
        if (i <= answers.length) {
            i++;
            let li = document.createElement('li');
            console.log(answers)
            li.textContent = answers;
            
            document.querySelector('#m-choice').appendChild(li);
        }
    }) 
    */

