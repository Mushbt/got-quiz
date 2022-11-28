/*jshint esversion: 6 */
const finalScore = document.getElementById('finalScore'); 
const mostRecentScore = localStorage.getItem('mostRecentScore'); //Get your final score
finalScore.innerText = `Your Score: ${mostRecentScore}`;