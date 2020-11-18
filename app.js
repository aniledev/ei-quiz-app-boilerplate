/**
 * Example store structure
 */
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: "Where was Frank Ocean born?",
      answers: [
        "Toronto, Canada",
        "Chicago, Illinois",
        "New Orleans, Louisiana",
        "Atlanta, Georgia",
      ],
      correctAnswer: "New Orleans, Louisiana",
    },
    {
      question: "What is Frank's zodiac sign?",
      answers: ["Pisces", "Sagitarrius", "Cancer", "Scorpio"],
      correctAnswer: "Scorpio",
    },
    {
      question: "What band collective is Frank Ocean associated with?",
      answers: ["Odd Future", "Brockhampton", "The Free Nationals", "Migos"],
      correctAnswer: "Odd Future",
    },
    {
      question: "What song did he co-write with Beyonce?",
      answers: ["Superpower", "Hold Up", "Sorry", "Diva"],
      correctAnswer: "Superpower",
    },
    {
      question: "What was Frank's childhood nickname?",
      answers: ["Franky", "Lonny", "Richie", "Skinny"],
      correctAnswer: "Lonny",
    },
    {
      question: "What does the color orange remind Frank of?",
      answers: [
        "Living in his hometown",
        "Losing his virginity",
        "Hearing great music",
        "Falling in love",
      ],
      correctAnswer: "Falling in love",
    },
    {
      question:
        "Which obsession does Frank Ocean lyrically reference numerous times throughout his recording career?",
      answers: ["Foreign films", "Anime", "Sneakers", "Cars"],
      correctAnswer: "Cars",
    },
    {
      question: "What is the name of Frank Ocean's recording label?",
      answers: ["Blonded", "G.O.O.D. Music", "Boys Don’t Cry", "Futura Free"],
      correctAnswer: "Boys Don’t Cry",
    },
    {
      question: "What is the name of the visual album Frank Ocean released?",
      answers: ["Unlimited", "Endless", "Forever", "Infinity"],
      correctAnswer: "Endless",
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

function startScreen() {
  // this function should simply return the start page HTML to the DOM
}

function showQuestion() {
  // this function should trigger when the user clicks the start quiz button and it goes to the first question
  // function needs to access question from the store variable
  // function needs to access answers from the store variable
  // function needs to return question, answers, info and submit button HTML to the DOM
}

function responseScreen() {
  // this function should trigger when the user clicks the submit button to see if they got the question right or wrong
  // function neds to access question from store variable
  // function needs to acess answers from the store variable
  // function needs to check if selected answer = correct answer
  // if selected answer === correct answer return correct answer HTML to the dom
  // if seleced answer !== correct answer reutnr incorrect answer HTML to the dom
}

function nextQuestion() {
  // this function should trigger when the user clicks the next button and the next question should load
  // this function needs to access the question from the STORE variable
  // the function needs to access teh answer from the STORE variable
  // this function needs to increment the index of the question in the STORE variable and return the HTML to the dom
}

function finalScreen() {
  // this function shoulld trigger when the user hits the next button on the final question
  // when question of last question === total numbers of questions (.length)
  // if true return the final screen HTML to the DOM
  // else generate next question and return the HTML to the DOM
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderStartScreen() {
  // this function will render the start screen depending on if the quiz === true or false
  // if quiz started === false then render the homepage / call the start screen function
  // if quiz started === true then render the question screen/ call the question screen function
  // this should initially render the start screen, no questions
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function main() {
  // this is the main function for the page that will fire when the page loads
  // renderStartScreen();
  // handleStartQuiz();
}

function handleStartQuiz() {
  // this function should trigger when then the start quiz button is clicked. once clicked it should move user to the question
  // create a click event on the start button
  // update the STORE variable for the start quiz === true
  // trigger the render function for start screen
}

function tryAgain() {
  // this function should trigger when the user clicks the try again button and they should be directed to the start of the screen
  // create click event of try agian button
  // change the start quiz variable to false
  // render the start screen HTML
}
