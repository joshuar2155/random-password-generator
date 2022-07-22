// Assignment Code

var generateBtn = document.querySelector('#generate');

//Password function

function generatePassword() {
  //Variables for generator
  var password = "password";
  var lowercase = true;
  var uppercase = true;
  var numbers = true;
  var special = true;
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var special = ["*","&", "^", "%", "$", "#", "@", "!"];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var passwordnumbers = [8-128];

  //Prompts and Commands for specifications

  passwordnumbers = window.prompt("How long would you like your password?");

  lowercase = window.confirm("Do you want your password to have lower case letters?")

  uppercase = window.confirm("Do you want your password to have upper case letters?")

  numbers = window.confirm("Do you want your password to have numbers?")

  special = window.confirm("Do you want your password to have special characters?")

  //If circumstances for selections

  if (lowercase === true) {

  }

  if (uppercase === true) {

  }

  if (numbers === true) {

  }

  if (special === true) {

  
  }
  
  return;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);