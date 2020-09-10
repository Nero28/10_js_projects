const quizData = [
    {
        question: 'How old are you?',
        a: '12',
        b: '34',
        c: '45',
        d: '21',
        correct: 'd',
    },
    {
        question: 'Which your favorite rock group?',
        a: 'Bon Jovi',
        b: 'AC DC',
        c: 'Scorpions',
        d: 'Metallica',
        correct: 'a',
    },
    {
        question: 'Which your favorite sports?',
        a: 'Boxing',
        b: 'Swimming',
        c: 'Run',
        d: 'Crossfit',
        correct: 'c',
    },
    {
        question: 'Which your favorite animal?',
        a: 'Dog',
        b: 'Cat',
        c: 'Horse',
        d: 'Cow',
        correct: 'b',
    },
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;




loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


};

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
};



submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});