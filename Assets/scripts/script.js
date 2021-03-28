let timerEl = document.getElementById('timer');
let buttonEl = document.getElementById('start-quiz');
let h1El = document.getElementById('responses');
let questionEl = document.getElementById('questions');
let mChoiceLi = document.querySelector('#m-choice-list');
let questIndex = 0;

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
        responses: ['makeMyCodeWork()','reduce()', 'toLowerCase()', 'codeMagic()'],
        correct: 'reduce()'
    }
];

let timer = 120;
let score = timer;
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
    this.value === questions[questIndex].correct ?
        score : score -= 10;

    questIndex++;
    if (questIndex === questions.length) {
        // end quiz function here
        console.log('Game Over!');
        alert(`Your score is ${score}`)
    } 
            // Else run this changeQuestion function
    changeQuestion();
    console.log('clicked a response');

}
buttonEl.onclick = startQuiz;
/*         function clickQuestion() {
            let question = questions[questIndex];
            h1El.textContent = title; 
            questIndex++;
            console.log('click'); 
        button.addEventListener("click", function(){ 

           console.log(`user chose = ${responses}`)
 
             this.innerHTML === question.correct ?
                score & console.log('correct!') :
                score -= 10;

            question = questions[questIndex];
            h1El.textContent = title;
            questIndex++;
            // this value needs to be something different
            console.log(question.responses[questIndex])
            button.innerHTML = question.responses[questIndex];
            changeQuestion(); 
             questIndex++;
  
         })
      } 
         mChoiceLi.appendChild(li);
  } */

