// Multipication Merit by Joe M done on 11/6/18
var x = 0;
var y = 0;
var wrongAnswers = 0;
var solution = 0; 
var userInput = 0;
var stop = false; 
var totalQuestions;
var wrongs;

// code 
totalQuestions = prompt("How many questions do you want to answer ?");
for (question = 0; question < totalQuestions; question++) {
	wrongAnswers+=parseInt(multiPractice());
}
if (wrongAnswers>0) {
	alert("Had "+wrongAnswers+" wrong answers of "+totalQuestions+ " questions.");
	}
    else alert ("You got them all correct, Good Job.");

// function 
function multiPractice(){ //the start of the function 
   	wrongs=0;// setting wrong to 0 
	  x = Math.floor(Math.random()*7)+3;// picking a random num for x
   	y = Math.floor(Math.random()*7)+3;// picking a random num for y 
	equation=("What is "+x+" * "+y+"?");// setting up equation 
	solution=x*y; // set answer to product
   	while ((userInput != solution) && (stop==false)) {// the start of the while loop 
		userInput = prompt(equation);// asking the user for an answer to the equation 
      	if (userInput == "stop" || userInput == "Stop") stop = true;// setting up stop and if it is inputed then stop the program 
		    else if (userInput == solution) alert("Correct!");// alerts that the user got it correct 
      	else if (userInput != solution) { 
         alert("Incorrect solution. Try again.");// alerting that the user got one wrong 
         wrongs++;// add's 1 to wrong 
      } // end Else
   } // end While
	if (wrongs > 0) wrongs = 1;
    return wrongs; //return's how many that the user got wrong 
}

