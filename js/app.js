'use strict';

//alert('Hey, is this thing on?');
var userName = prompt('Hi! Glad that you are here! What is your name?');
alert('Hi ' + userName + ', nice to meet you! I\'m going to ask you a few fun questions about me. Please answer with y/n or yes/no.');
console.log('User was asked what their name is, responded with ' + userName);

var answer1 = prompt('Do you think I like pets?').toLowerCase().trim();
console.log('User was asked if they thought I liked pets, they responded with ' + answer1);
if (answer1 === 'yes' || answer1 === 'y') {
  alert('You\'re right, ' + userName + '! I love all animals!');
} else if (answer1 === 'no' || answer1 === 'n') {
  alert('Um, no, ' + userName + ', you\'re wrong. I love animals.');
} else {
  alert('Sorry, that was not a valid answer. Maybe you made a type? Oh well let\'s move on to the next question.');
}

var answer2 = prompt('Is my favorite color green?').toLowerCase().trim();
console.log('User was asked if they thought that my favorite color was green, they responded with ' + answer2);
if (answer2 === 'no' || answer2 === 'n') {
  alert('Good Job ' + userName + '! My favorite color isn\'t green, it is blue!');
} else if (answer2 === 'yes' || answer2 === 'y') {
  alert('Sorry, ' + userName + ', my favorite color is blue, not green.');
} else {
  alert('That was not a valid response. Let\'s move on to the next question!');
}

var answer3 = prompt('Next question! Do you think I have a brother?').toLowerCase().trim();
console.log('User was asked if they thought that I had a brother, they responded with ' + answer3);
if (answer3 === 'yes' || answer3 === 'y') {
  alert('You are correct, ' + userName + '! I have an older brother who lives in New York, he will be visiting in 2 days!');
} else if (answer3 === 'no' || answer3 === 'n') {
  alert('Sorry, ' + userName + ', I have an brother who lives in New York, he is actually visiting in 2 days!!!');
} else {
  alert('Come on, ' + userName + ', please follow the directions!');
}

var answer4 = prompt('Do you think I went to the University of Washington?').toLowerCase().trim();
console.log('User was asked if they thought that I went to the University of Washington, they responded with ' + answer4);
if (answer4 === 'no' || answer4 === 'n') {
  alert('You\'re right, ' + userName + '! I went to the University of Illinois at Urbana-Champaign!');
} else if (answer4 === 'yes' || answer4 === 'y') {
  alert('Sorry, I did not go to the University of Washington, I went to the University of Illinois at Urbana-Champaign.');
} else {
  alert('Sorry, that was not yes, no, y, or n so the response could not be interpreted.');
}

var answer5 = prompt('Final question! Do you think that my parents live in the United States?').toLowerCase().trim();
console.log('User was asked if they thought that my parents live in the United States, they responded with ' + answer5);
if (answer5 === 'no' || answer5 === 'n') {
  alert('Wow, ' + userName + ', you\'re right! My parents live in Taiwan but come to the United States to visit my brother, sister, and me from time to time.');
} else if (answer5 === 'yes' || answer5 === 'y') {
  alert('Unfortunately, ' + userName + ', they do not. For the most part they live in Taiwan and only come to the United States to visit my brother, my sister or me.');
} else {
  alert('Well that was the last question, and unfortunately I could not interpret your response.');
}
