

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

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
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
      
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
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
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

const questions = [
  {
    question: 'How far behind am I in class?',
    answers: [
      { text: '1 day', correct: false },
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
      { text: 'You already failed', correct: false },
      { text: 'Nice and Easy', correct: true },
      { text: 'Scrutinizing every detail', correct: false },
    ]
  },

]