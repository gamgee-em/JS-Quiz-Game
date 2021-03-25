let timerEl = document.getElementById('timer');
let buttonEl = document.getElementById('start-quiz');
let mainEl = document.getElementById('switch');
let h1El = document.getElementById('question');
let paraEl = document.getElementById('welcome');
let mChoiceBtn = document.getElementsByClassName('m-choice-btn');

let questions = [
    {
        title: 'Which is a Boolean Value?',
        responses: ['Hello', 'False', '36', 'false'],
        correct: 'false'
    },
    {
        title: 'What does the DRY principle stand for?',
        responses: ['Do Rocks Yawn', 'Don\'t Repeat Yourself', 'Don\'t Raise Yeti\'s', 'Definitely Raise Yeti\'s'],
        correct: 'Don\'t Repeat Yourself',
    },
    {
        title: 'Which is a String Value?',
        responses: ["'5'", '5' , 'true', 'NaN'],
        correct: "'5'",
    },
    {
        title: 'Which is an Array Method?',
        responses: ['makeMyCodeWork()','reduce()', 'toLowerCase()', 'codeMagic()'],
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
        score > 0 ? score-- : score;
    }, 1000);

    let question = questions[0];
    h1El.textContent= question.title;
    question.responses.forEach((choice, i) => {
        let li = document.createElement('li');
        li.setAttribute('class', 'choices');
        li.textContent = choice;
        console.log(choice)
        console.log(i)
        li.addEventListener('click', (event) => {
            event.target.innerHTML === questions[0].correct ?
                score : score -= 10;
                console.log(score);
        })
        document.querySelector('#m-choice-list').appendChild(li);
    })
    /* for (let i = 0; i < question.responses.length; i++) {
        let responses = question.responses[i];
        let li = document.createElement('li');
        li.setAttribute('class', 'responses');
        li.textContent = responses;
        li.addEventListener('click', (event) => {
            event.target.innerHTML === questions[0].correct ?
                score : score -= 10;
                console.log(score);

        }) */
/*         document.querySelector('#m-choice-list').appendChild(li);
 */    
});


