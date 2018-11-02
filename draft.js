// initializations
var x = 0;
var y = 0;
var solution = 0; // calculated value
var userInput = 0; // manual input value
var stop = false;  // signal value
var wrongAnswers=0;
// code -- NO BLUE VARIABLES
for (question = 1; question <=11; question++) {
   wrongAnswers=multiPractice(question);
   alert("You have "+wrongAnswers+" wrong answers.");
} // end Loop
  
// FUNCTIONS
function multiPractice(question){
   x = Math.floor(Math.random()*7)+3;
   y = Math.floor(Math.random()*7)+3;
   solution=x*y; // set answer to product 
   while ((userInput != solution) && (stop==false)) {
      userInput = prompt("Question "+question+": What is "+x+" * "+y+"?");
      if (userInput == "stop" || userInput == "Stop") {
         stop = true;
      }  // end if 
      else if (userInput == solution) {
         alert("Correct!");
      } // end else if
      else {
         alert("Incorrect solution. Try again.");
         wrongAnswers++;
      } // end Else
   } // end While
   return wrongAnswers;
}
