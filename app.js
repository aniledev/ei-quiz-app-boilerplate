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

let score = STORE.score;
let question = STORE.questions[STORE.questionNumber].question;
let answers = STORE.questions[STORE.questionNumber].answers;
let correct = STORE.questions[STORE.questionNumber].correctAnswer;

let answersInput = answers.map(function (answer, index) {
  return `<input id="question-${index}" name="response" type="radio" 
  value="${answer}" required/> ${answer}</br>`;
});
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

function generateStartTemplate() {
  // this function should simply return/generate the start page HTML to the DOM
  // backticks contain start screen HTML from wireframe
  return `<section class="start-screen">
  <h2>Take the Frank Ocean Quiz!</h2>
  <div>
      <img src="https://media.snl.no/media/135506/article_topimage_Frank_Ocean.jpg" alt="Photograph of the singer/songwriter Frank Ocean singing into a microphone against a dark purple background">
  </div>
  <div>
      <h2>Are You A True Frank Ocean Fan? Take This Quiz to Find Out.</h2>
      <p>This quiz features questions about Frank Ocean as a person and an artist.</p>
      <button class="start-quiz" name="start-quiz" type="submit">Start Quiz</button>
  </div>
  </section>`;
}

function generateQuestionTemplate() {
  let answers = STORE.questions[STORE.questionNumber].answers;
  let correct = STORE.questions[STORE.questionNumber].correctAnswer;
  let answersInput = answers.map(function (answer, index) {
    return `<input id="question-${STORE.questionNumber}" name="response" type="radio" 
    value="${answer}" required/><label for="question-${STORE.questionNumber}">${answer}</label> </br>`;
  });
  // this function should trigger when the user clicks the start quiz button and it goes to the first question
  // function needs to access question from the store variable
  // function needs to access answers from the store variable

  // using the map function to apply html formating to each of the possible answer options

  // returning the full html of our question and answer screen to the DOM
  return `<section class="question-screen">
  <h2>Wishing You Godspeed...</h2>
  <div>
      <img src="https://media.snl.no/media/135506/article_topimage_Frank_Ocean.jpg" alt="Photograph of the singer/songwriter Frank Ocean singing into a microphone against a dark purple background">
  </div>
  <div class="question">
  
      <h4 class="progress">${STORE.questionNumber + 1} out of ${
    Object.keys(STORE.questions).length
  }</h4>
      <form class="question-form" accept-charset="UTF-8" autocomplete="on">
      <h3>${STORE.questions[STORE.questionNumber].question}</h3>
          
          ${answersInput.join("")}
          <button class="show-answer" name="show-answer" type="submit" >Submit</button>
      </form>
      <!-- This will update on each view based on what the user selects throughout the quiz. -->
      <h4 class="score">${STORE.score} correct out of ${
    STORE.questionNumber
  }</h4>

  </div>
</section>`;
}

function correctResponseTemplate(score) {
  // this function should trigger when the user clicks the submit button to see if they got the question right or wrong
  // function neds to access question from store variable
  let question = STORE.questions[STORE.questionNumber].question;
  // function needs to acess answers from the store variable
  let answers = STORE.questions[STORE.questionNumber].answers;
  let answersInput = answers.map(function (answer, index) {
    return `<input id="question-${index}" name="response" type="radio" 
    value="${answer}" required/> ${answer}</br>`;
  });

  return `<section class="correct-screen">
  <h2 id="response-header" class="response-header">You know your stuff! You're a true fan.</h2>
  <div>
      <img src="https://media.snl.no/media/135506/article_topimage_Frank_Ocean.jpg" alt="Photograph of the singer/songwriter Frank Ocean singing into a microphone against a dark purple background">
  </div>
  <div>
      
      <form accept-charset="UTF-8" autocomplete="on">
          <label for="response-${STORE.questionNumber}">
              <h3>${question}</h3>
          </label>
          ${answersInput.join("")}
          <button class="next-question" name="next-question" type="submit">Next Question</button>
      </form>
      <!-- This will update on each view based on what the user selects throughout the quiz. -->
      <h4 class="score">${score} correct out of ${STORE.questionNumber + 1}</h4>
      
  </div>
</section>`;
}

function incorrectResponseTemplate(score) {
  // this function should trigger when the user clicks the submit button to see if they got the question right or wrong
  let question = STORE.questions[STORE.questionNumber].question;
  // function needs to acess answers from the store variable
  let answers = STORE.questions[STORE.questionNumber].answers;
  let answersInput = answers.map(function (answer, index) {
    return `<input id="question-${index}" name="response" type="radio" 
    value="${answer}" required /> ${answer}<br>`;
  });
  return `<section class="incorrect-screen">
  <h2 id="incorrect-repsonse-header " class="incorrect-repsonse-header">Uh oh! That's not right. And you call yourself a fan.</h2>
  <div>
      <img src="https://media.snl.no/media/135506/article_topimage_Frank_Ocean.jpg"
           alt="Photograph of the singer/songwriter Frank Ocean singing into a microphone against a dark purple background">
  </div>
  <div>
      <form accept-charset="UTF-8" autocomplete="on">
          <label for="response-${STORE.questionNumber}">
              <h3>${question}</h3>
              <h3 id="feedback" class="feedback">The correct answer is: ${
                STORE.questions[STORE.questionNumber].correctAnswer
              }</h3>
          </label>
          ${answersInput.join("")}
          <button class="next-question" name="next-question" type="submit">Next Question</button>
      </form>
      <!-- This will update on each view based on what the user selects throughout the quiz. -->
      <h4 class="score">${score} correct out of ${STORE.questionNumber + 1}</h4>
  </div>
</section>`;
}

function finalScreenTemplate() {
  // this function shoulld trigger when the user hits the next button on the final question
  // when question of last question === total numbers of questions (.length)
  // if true return the final screen HTML to the DOM
  // else generate next question and return the HTML to the DOM
  return `<section class="score-screen">
  <h2>Here's how you did!</h2>
    <div>
        <img src="https://media.snl.no/media/135506/article_topimage_Frank_Ocean.jpg" alt="Photograph of the singer/songwriter Frank Ocean singing into a microphone against a dark purple background">
    </div>
    <div>
        <h2 class="final-score">You answered ${
          STORE.score
        } questions correct out of ${Object.keys(STORE.questions).length}!</h2>
        <h3>If you did well, you earned the right to call yourself a true Frank Ocean fan.</h3>
        <h3>If you didn't do so well, don't fret. Frank is an elusive character.</h3>
        <button class="try-again" name="try-again" type="button">Try Again</button>
    </div>
  </section>`;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render() {
  // this function will render the start screen depending on if the quiz === true or false
  // create an empty string to hold the HTML generation
  let html = "";
  // if quiz started === false then render the homepage / call the start screen function
  if (STORE.quizStarted === false) {
    html = generateStartTemplate();
  } else if (
    STORE.quizStarted === true &&
    STORE.questionNumber === STORE.questions.length
  ) {
    html = finalScreenTemplate();
  }
  // if quiz started === true then render the question screen/ call the question screen function
  else {
    html = generateQuestionTemplate();
  }

  //display manipulate the DOM to add the HTML stored in the HTML variable
  $("main").html(html);

  // this should initially render the start screen, no questions
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleStartQuiz() {
  // this function should trigger when then the start quiz button is clicked. once clicked it should move user to the question
  // create a click event on the start button
  $("main").on("click", ".start-quiz", function (event) {
    // update the STORE variable for the start quiz === true
    event.preventDefault();

    STORE.quizStarted = true;
    // trigger the render function for start screen and it should now display the question screen
    render();
  });
}

function handleShowAnswer() {
  // function needs to acess the value of the radio button they selected when the hit the submit button

  $("main").on("submit", ".question-form", function (event) {
    event.preventDefault();
    let selected = $("input[type=radio]:checked").val();

    // function neds to access question from store variable
    let question = STORE.questions[STORE.questionNumber].question;
    // function needs to acess answers from the store variable
    let answer = STORE.questions[STORE.questionNumber].correctAnswer;

    // function needs to check if selected answer = correct answer
    if (selected == answer) {
      // if selected answer === correct answer return correct answer HTML to the dom

      STORE.score++; // score++
      html = correctResponseTemplate(STORE.score);

      // if seleced answer !== correct answer reutnr incorrect answer HTML to the dom
    } else {
      html = incorrectResponseTemplate(STORE.score);
    }

    $("main").html(html);
  });
}

function handleNextQuestion() {
  // this function should trigger when the user clicks the next button and the next question should load
  // this function needs to access the question from the STORE variable
  // the function needs to access teh answer from the STORE variable
  // this function needs to increment the index of the question in the STORE variable and return the HTML to the dom

  $("main").on("click", ".next-question", function (event) {
    STORE.questionNumber++;
    render();
  });
}

function handleTryAgain() {
  // this function should trigger when the user clicks the try again button and they should be directed to the start of the screen
  // create click event of try agian button
  $("main").on("click", ".try-again", function (event) {
    event.preventDefault();
    STORE.quizStarted = false;
    STORE.questionNumber = 0;
    STORE.score = 0;
    render();
  });
  //console log that user clicked button
  // revert quiz back to its initial state
  // assign the start quiz variable to false
  // assign the question number to 0
  // assign the score to 0
  // render the start screen HTML based on these new state conditions
}

function main() {
  // this is the main function for the page that will fire when the page loads
  render();
  handleStartQuiz();
  handleShowAnswer();
  handleNextQuestion();
  handleTryAgain();
}

$(main);
