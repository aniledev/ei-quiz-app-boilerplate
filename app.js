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

const number = STORE.questionNumber;
const question = STORE.questions[number].question;
const answers = STORE.questions[number].answers;
const correct = STORE.questions[number].correctAnswer;
const answersInput = answers.map(function (answer, index) {
  return `<input id="question-${index}" name="response" type="radio" required
  value="${answer}" /> ${answer}</br>`;
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

function generateStart() {
  // this function should simply return/generate the start page HTML to the DOM
  // backticks contain start screen HTML from wireframe
  return `<section class="start-screen">
  <h2>Start</h2>
  <div>
      <img src="https://media.snl.no/media/135506/article_topimage_Frank_Ocean.jpg" alt="">
  </div>
  <div>
      <h2>Are You A True Frank Ocean Fan? Take This Quiz to Find Out.</h2>
      <p>This quiz features questions about Frank Ocean as a person and an artist.</p>
      <button class="start-quiz" name="start-quiz" type="submit">Start Quiz</button>
  </div>
  </section>`;
}

function generateQuestion() {
  // this function should trigger when the user clicks the start quiz button and it goes to the first question
  // function needs to access question from the store variable
  // function needs to access answers from the store variable

  // using the map function to apply html formating to each of the possible answer options

  // returning the full html of our question and answer screen to the DOM
  return `<section class="question-screen">
  <h2>Wishing You Godspeed...</h2>
  <div>
      <img src="https://media.snl.no/media/135506/article_topimage_Frank_Ocean.jpg" alt="">
  </div>
  <div class="question">
  
      <h4 class="progress">${number + 1} out of ${
    Object.keys(STORE.questions).length
  }</h4>
      <form accept-charset="UTF-8" action="" autocomplete="off" method="" target="">
          <label for="question-${number}">
              <h3>${question}</h3>
          </label>
          ${answersInput.join("")}
          <button class="show-answer" name="show-answer" type="submit">Submit</button>
      </form>
      <!-- This will update on each view based on what the user selects throughout the quiz. -->
      <h4 class="score">${STORE.score} correct out of ${number}</h4>

  </div>
</section>`;
}

function correctResponseScreen() {
  // this function should trigger when the user clicks the submit button to see if they got the question right or wrong
  const answersInput = answers.map(function (answer, index) {
    return `<input id="question-${index}" name="response" type="radio" required
    value="${answer}" /> ${answer}</br>`;
  });

  return `<section class="correct-screen">
  <h2>Correct Answer Screen Wireframe</h2>
  <div>
      <img src="https://media.snl.no/media/135506/article_topimage_Frank_Ocean.jpg" alt="">
  </div>
  <div>
      <h2>You know your stuff!</h2>
      <form accept-charset="UTF-8" action="" autocomplete="off" method="" target="">
          <label for="response-${number}">
              <h3>${question}</h3>
          </label>
          ${answersInput.join("")}
          <button class="show-answer" name="show-answer" type="submit">Submit</button>
      </form>
      <!-- This will update on each view based on what the user selects throughout the quiz. -->
      <h4 class="score">${STORE.score} correct out of ${number}</h4>
      
  </div>
</section>`;
}

function incorrectResponseScreen() {
  // this function should trigger when the user clicks the submit button to see if they got the question right or wrong
  return `<section class="incorrect-screen">
  <h2>Incorrect Answer Screen Wireframe</h2>
  <div>
      <img src="https://media.snl.no/media/135506/article_topimage_Frank_Ocean.jpg"
           alt="">
  </div>
  <div>
      <h2>Uh oh! That's not right. And you call yourself a fan.</h2>
      <form accept-charset="UTF-8" action="" autocomplete="off" method="" target="">
          <form accept-charset="UTF-8" action="" autocomplete="off" method="" target="">
          <label for="response-${number}">
              <h3>${question}</h3>
          </label>
          ${answersInput.join("")}
          <button class="show-answer" name="show-answer" type="submit">Submit</button>
      </form>
      <!-- This will update on each view based on what the user selects throughout the quiz. -->
      <h4 class="score">${STORE.score} correct out of ${number}</h4>
  </div>
</section>`;
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
  return `<section class="score-screen">
  <h1>Frank Ocean Quiz</h1>
    <div>
        <img src="https://media.snl.no/media/135506/article_topimage_Frank_Ocean.jpg" alt="">
    </div>
    <div>
        <h2 class="final-score">You answered 7 questions correct out of 9!</h2>
        <h3>If you did well, you earned the right to call yourself a true Frank Ocean fan.</h3>
        <h3>If you didn't do so well, don't fret. Frank is an elusive character.</h3>
        <button class="quit" name="quit" type="button">Quit</button>
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
    html = generateStart();
  }
  // if quiz started === true then render the question screen/ call the question screen function
  else {
    html = generateQuestion();
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
    console.log("user clicked start button");
    STORE.quizStarted = true;
    // trigger the render function for start screen and it should now display the question screen
    render();
  });
}

function showAnswer() {
  // function needs to acess the value of the radio button they selected when the hit the submit button
  $("main").on("click", ".show-answer", function (event) {
    event.preventDefault();
    console.log("user clicked show answer");
    // create a variable to identify which question user is on
    let number = STORE.questionNumber;
    // function neds to access question from store variable
    let question = STORE.questions[number].question;
    // function needs to acess answers from the store variable
    let answer = STORE.questions[number].correctAnswer;
    let selected = $("input[class='show-answer']:checked").val();
    console.log(`user selected: ${selected}`);
    console.log(`correct answer is: ${answer}`);
    // function needs to check if selected answer = correct answer
    if (selected === answer) {
      // if selected answer === correct answer return correct answer HTML to the dom
      html = correctResponseScreen();

      // if seleced answer !== correct answer reutnr incorrect answer HTML to the dom
    } else {
      html = incorrectResponseScreen();
    }

    $("main").html(html);
  });
}

function tryAgain() {
  // this function should trigger when the user clicks the try again button and they should be directed to the start of the screen
  // create click event of try agian button
  // change the start quiz variable to false
  // render the start screen HTML
}

function main() {
  // this is the main function for the page that will fire when the page loads
  render();
  handleStartQuiz();
  showAnswer();
}

$(main);
