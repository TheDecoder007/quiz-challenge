

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
//"wrong" button data for point deduction?
      if (answer.wrong) {
        button.dataset.wrong = answer.wrong
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  }
    //need to disable restart? or move somewhere else for after high score?
  else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

var questions = [
  // {
  //     title: "commonly used data types DO NOT include:",
  //     choices: ["strings", "booleasns", "alerts", "numbers"],
  //     answer: "alerts"
  
  // },
{
    question: 'How far behind am I in class?',
    answers: [
      { text: '1 day', wrong: true },
      { text: '2 days', correct: false },
      { text: '1 week', correct: true },
      { text: '2 weeks', correct: false },
    ]
  },
  {
    question: 'Who is the G.O.A.T.?',
    answers: [
      { text: 'Larry Bird', correct: false },
      { text: 'Michael Jordan', correct: true },
      { text: 'Magic Johnson', correct: false },
      { text: 'Kevin Garnett', correct: false },
    ]
  },
  {
    question: 'What animal are "Mans best friend"?',
    answers: [
      { text: 'Chimpanzees', correct: false },
      { text: 'Elephants', correct: false },
      { text: 'Dogs', correct: true },
      { text: 'Cats', correct: false },
    ]
  },
  {
    question: 'What does NFT stand for?',
    answers: [
      { text: 'Neuro Figure Translator', correct: false },
      { text: 'Never Finding Time', correct: false },
      { text: 'Non-fungible Token', correct: true },
      { text: 'Nine Five Ten', correct: false },
    ]
  },
  {
    question: 'What is the best pizza topping?',
    answers: [
      { text: 'Olives', correct: false },
      { text: 'Anchovies', correct: false },
      { text: 'Pepperoni', correct: false },
      { text: 'All of the above', correct: true },
    ]
  },
  {
    question: 'How hard will you be while grading this project?',
    answers: [
      { text: 'Extremely hard', correct: false },
      { text: 'I already failed', correct: false },
      { text: 'Nice and easy', correct: true },
      { text: 'What project?', correct: false },
    ]
  },
]

//timer working
var timeBox = document.querySelector('h2');
var timeLeft = 60;

displayTime(timeLeft); 

document.getElementById("start-btn").addEventListener("click", function() {

  var countDown = setInterval (()=>{
    timeLeft--;
displayTime(timeLeft);
if (timeLeft <= 0 || timeLeft < 1) {
  endTime();
  clearInterval(countDown);
}
},1000);
});

function displayTime(second) {
  var minutes = Math.floor(second / 60);
  var seconds = Math.floor(second % 60);
  
  timeBox.innerHTML = timeLeft;
}

function endTime() {
  timeBox.innerHTML = 'TIME UP!!'
  
}

//subtract time for wrong answer - broken, takes time off for all answers
document.getElementById("button").addEventListener('click', function() {
  //if (button = false) {}
  //if (this.value !===  questions[i].answer) 
  
  timeLeft -= 5;
  document.getElementById('timer')
});

displayTime();

//end of subtract time

//saving time left to local storage
localStorage.setItem("timer", "timeLeft");


//Timer not working

// function startTimer() {
//   var timer = minutes, seconds;
//   setInterval(function() {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ":" + seconds;

//     if (--timer < 0) {
//       timer = duration;

//     }
//   }, 1000);
// }

// window.onload = function () {
//   var oneMinute = 60 * 1,
//   display = document.querySelector('#timer');
//   startTimer(oneMinute, display);
// };

//timer not working
// (function() {
//   var sec = 60;
//   function startTimer(){
//       console.log('timer suppose to go')
//       var timer = setInterval(function(){
//           sec--;
//           document.getElementById('timerDisplay').innerHTML='00:'+sec;
//           if (sec < 0) {
//               clearInterval(timer);
//               alert("Time is up!")
//           }
//       }, 1000);
//   }
//   document.getElementById('wrong').addEventListener('click', function() {
//       sec -= 5;
//       document.getElementById('timer').innerHTML='00:'+sec;
//   });
//   startTimer();
// })()

//timer not working
// const startingMinutes = 10;
// let time = startingMinutes = 60;

// const countdownEl = document.getElementById ('countdown');

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   countdownEl.innerHTML = '${minutes}: ${seconds}';
//   time--;
// }

// var counter = 0;
// var timeleft = 60;

// function convertSeconds(s) {
//     var min = floor(s / 60);
//     var sec = s % 60;
//     return min + ':' + sec;

// }

//   function setup() {
    
//     var timer = select('#timer');
//     timer.html(convertSeconds(timeleft - counter));

//     function timeIt() {
//       counter++;
//       timer.html(convertSeconds(timeleft - counter));
//     }

//     setInterval(timeIt, 1000);
//   }
  