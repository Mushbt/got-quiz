/*jshint esversion: 6 */
// Declares a constant variable finalScore and assigns it the value of the DOM element with the ID of finalScore using the document.getElementById() method.
const finalScore = document.getElementById('finalScore'); 
// Declares a constant variable mostRecentScore and assigns it the value of the most recent score from the local storage using the localStorage.getItem() method.
const mostRecentScore = localStorage.getItem('mostRecentScore');
// Sets the text of the finalScore element to display the final score using template literals, with the text "Your Score: " followed by the value of the mostRecentScore variable.
// This is done using the innerText property of the finalScore element.
finalScore.innerText = `Your Score: ${mostRecentScore}`;