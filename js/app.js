'use strict';

var userName = prompt ('Hi! Glad that you are here! What is your name?');
alert('Hi ' + userName + ', nice to meet you! I\'m going to ask you a few fun questions about me. Please answer with y/n or yes/no.');
console.log ('User was asked what their name is, responded with ' + userName);

//This is a huge array of all the questions that will be asked
var question = ['Do you think I like pets?', 'Is my favorite color green?', 'Next question! Do you think I have a brother?', 'Do you think I went to the University of Washington?', ' Do you think that my parents live in the United States?', 'I have picked a number between 0 and 20, please try to guess what it is. Good luck!', 'Can you guess what one of my favorite fruits to eat is? Please answer with single fruit names'];
var correctResponses = 0; //This is a counter for the number of correct responses the user gives
var answer = []; //This array will store everything that the user inputs except for their username.
var i = 0;

//This function hold the first 5 questions which are yes/no questions
function questionYesNo (){
  var x = ['yes', 'no', 'yes', 'no', 'no']; //This stores one version of the correct answers to the first 5 questions
  var y = ['y', 'n', 'y', 'n', 'n']; //This stores the 2nd version of the answers
  var z = []; //This is used to make sure the user inputted a correct value

  //The 3 arrays below store the responses that the user will receive for the first 5 questions based on the user's answers.
  var correct = ['You\'re right, ' + userName + '! I love all animals!', 'Good Job ' + userName + '! My favorite color isn\'t green, it is blue!', 'You are correct, ' + userName + '! I have an older brother who lives in New York, he actually visited over the weekend!!!', 'You\'re right, ' + userName + '! I went to the University of Illinois at Urbana-Champaign!', 'Wow, ' + userName + ', you\'re right! My parents live in Taiwan but come to the United States to visit my brother, sister, and me from time to time.'];
  var incorrect = ['Um, no, ' + userName + ', you\'re wrong. I love animals.', 'Sorry, ' + userName + ', my favorite color is blue, not green.', 'Sorry, ' + userName + ', I have an brother who lives in New York, he actually visited over the weekend!!!', 'Sorry, I did not go to the University of Washington, I went to the University of Illinois at Urbana-Champaign.', 'Unfortunately, ' + userName + ', they do not. For the most part they live in Taiwan and only come to the United States to visit my brother, my sister or me.'];
  var inValid = ['Sorry, that was not a valid answer. Maybe you made a type? Oh well let\'s move on to the next question.', 'That was not a valid response. Let\'s move on to the next question!', 'Come on, ' + userName + ', please follow the directions!', 'Sorry, that was not yes, no, y, or n so the response could not be interpreted.', 'Unfortunately I could not interpret your response.'];

  //The 5 Yes/No Questions
  for (i = 0; i < 5; i ++) {

    answer[i] = prompt (question[i]).toLowerCase().trim(); //This normalizes the user's response to all lowercase with no spaces at the start or end.
    console.log (userName + ' was asked: ' + question[i] + ', ' + userName + ' responded with ' + answer[i]);

    z[i] = answer[i] === 'yes' || answer[i] === 'no' || answer[i] === 'y' || answer[i] === 'n'; //This checks the user's response with the possible answers and returns either true or false for it.

    if (answer[i] === x[i] || answer[i] === y[i]) {
      alert (correct[i]);
      correctResponses ++;
    } else if (z[i] === false) {
      alert (inValid[i]);
    } else {
      alert (incorrect[i]);
    }

  }
}
questionYesNo ();

//This function creates a random number and has the user guess what it is. The user gets 4 attempts.
function numQuestion (){
  //Random number guessing
  var number = Math.floor (Math.random() * 20 + 1); //This gets a random number between 0 and 20
  console.log (number); //This shows what the random number is

  for (var j = 4; j > 0; j --) {
    answer[i] = prompt (question[i]); //This gets the user's response but as a string.
    var guess = parseInt (answer[i]); //This makes the user's response an integer rather than a string.
    console.log (userName + ' was asked: ' + question[i] + ', ' + userName + ' responded with ' + answer[i]);
    var k = j - 1; //This is just so that the right number is showed in the alert
    if (guess === number) {
      alert ('You are right! The number is ' + number + '!');
      correctResponses ++;
      break; //This takes me out of the for loop
    } else if (guess < number) {
      alert ('The number you guessed was too low! You have ' + k + ' more chances.');
    } else if (guess > number) {
      alert ('The number you guessed was too high! You have ' + k + ' more chances.');
    } else {
      alert ('That is not a valid response. you have ' + k + ' more chances.');
    }
  }
  i++; //i needs to be incremented because we are using it to increase the size of the answer array and also to call on the right question from the question array.
}
numQuestion ();

//This function has the user try to guess what one of my favorite fruits are. The user's answer is compared to an array and then determined whether they got it right or wrong.
function fruitQuestion (){
  //The question with multiple possible answers
  var fruit = ['apple', 'blueberry', 'strawberry', 'persimmon', 'orange', 'grape', 'watermelon', 'tangerine', 'cantaloupe', 'cherry', 'honeydew', 'longan', 'mandarin', 'lychee', 'clementine'];
  var fruitCheck = []; //This array will be used to check through all the fruit to see if any match the user's response.
  for (var s = 6; s > 0; s --) {
    answer[i] = prompt (question[i]).toLowerCase().trim();
    console.log (userName + ' was asked: ' + question[i] + ',' + userName + ' responded with ' + answer[i]);

    //This for loop is used to check the answer given by the user to every value in the fruit array
    for (var t = 0; t < fruit.length; t ++) {
      if (answer[i] === fruit[t]) {
        fruitCheck[t] = true;
        alert ('Yes! One of my favorite fruits is ' + answer[i] + '!');
        correctResponses ++;
        s = 0; //This is used so that the first for loop will stop
        break; //This is to get out of the for loop for checking every value in the fruit array since a match has been found.
      }
    }
    var s2 = s - 1;
    if (s2 === 0) { //This is used for if the user never got the right answer with all 6 attempts.
      alert ('No, ' + answer[i] + ' is not one of my favorite fruits. Please try again! You have ' + s2 + ' attempts left.');
      alert ('Here\'s the list of my favorite fruits: apple, blueberry, strawberry, persimmon, orange, grape, watermelon, tangerine, cantaloupe, cherry, honeydew, longan, mandarin, lychee, and clementine!');
    } else if (s === 0) { //This is for if the user gets a right answer.
      alert ('Here\'s the list of my favorite fruits: apple, blueberry, strawberry, persimmon, orange, grape, watermelon, tangerine, cantaloupe, cherry, honeydew, longan, mandarin, lychee, and clementine!');
    } else { //This is used for when the user gets the wrong answer but still has tries left to guess a correct answer.
      alert ('No, ' + answer[i] + ' is not one of my favorite fruits. Please try again! You have ' + s2 + ' attempts left.');
    }

  }
  i ++; //This is used to keep track of how many questions have been asked
}
fruitQuestion ();

alert ('That\'s all for the guessing game! You got ' + correctResponses + '/' + i + ' questions right. Thanks for playing!');