const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.querySelector('#question');
const fullDisplay = document.querySelector('#quiz');
// const questionEl;
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit');

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    quiz.innerHTML = quizData[currentQuiz].question
    a_text.innerHTML = quizData[currentQuiz].a
    b_text.innerHTML = quizData[currentQuiz].b
    c_text.innerHTML = quizData[currentQuiz].c
    d_text.innerHTML = quizData[currentQuiz].d
}

function deselectAnswers() {

}

function getSelected() {
    var ans = document.getElementsByName('answer');
    for(i = 0; i < ans.length; i++) {
        if(ans[i].checked) {
            if ( quizData[currentQuiz].correct == ans[i].id) {
                score ++
            } 
            ans[i].checked = false;
        }
    }
}

submitBtn.addEventListener('click', () => {
    getSelected()
    currentQuiz++
    if (currentQuiz < 4) {
        quiz.innerHTML = quizData[currentQuiz].question
        a_text.innerHTML = quizData[currentQuiz].a
        b_text.innerHTML = quizData[currentQuiz].b
        c_text.innerHTML = quizData[currentQuiz].c
        d_text.innerHTML = quizData[currentQuiz].d
    } else {
        fullDisplay.innerHTML = `<h1> Score : ${score} / 5 </h1>`
        fullDisplay.style.backgroundColor = 'green' ; 
        fullDisplay.style.textAlign = "center";
    }
    
}) 