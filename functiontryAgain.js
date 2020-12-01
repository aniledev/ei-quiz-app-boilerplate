function tryAgain() {
  // this function should trigger when the user clicks the try again button and they should be directed to the start of the screen
  // create click event of try agian button
  $("main").on("click", ".try-again", function (event) {
    console.log("user clicked try again");
    console.log("correct function running - try again");
    STORE.questionNumber++;
    console.log(`number: ${STORE.questionNumber}`);
    render();
  });
  // reset the question number
  // reset the score
  // change quiz started to
  // render the start screen HTML
}
