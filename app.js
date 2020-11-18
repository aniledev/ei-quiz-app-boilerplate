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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
