$(function() {
  var input= prompt("What do you like to do in your free time?");

  console.log(input);

  var newstring = function(input) {
    var stringlength = input.length;
    var firstLetter = input.charAt(0).toUpperCase();
    var lastLetter = input.charAt(stringLength - 1).toUpperCase();
    return firstLetter + lastLetter;
  };

  var lastFirstLetters = function(input) {
    var stringLength = input.length;
    var firstLetter = input.charAt(0).toUpperCase();
    var lastLetter = input.charAt(stringLength - 1).toUpperCase();
    return lastLetter + firstLetter;
  }

  var singleLetter = function(input) {
    var stringLength = (input.length / 2).toFixed();
    var letter = input.charAt(stringLength - 1);
    return letter + input + lastFirstLetters(input);
  }

  var shortString = function(input) {
    return sentence + lastFirstLetters(sentence);
  }

  var cipher = function(input) {
    var word =  singleLetter(input);
    var newString = "";
    for (var i = word.length - 1; i >= 0; i--) {
      newString += word[i];
    }
    console.log(newString);
  }
    cipher(input);
});
