$(function() {

// lastFirstLetters() returns a String of the last and first letters of String input
  var lastFirstLetters = function(input) {
    var stringLength = input.length;
    var firstLetter = input.charAt(0).toUpperCase();
    var lastLetter = input.charAt(stringLength - 1).toUpperCase();
    return lastLetter + firstLetter;
  }

// singleLetter() returns a single letter from the middle of the String input
  var singleLetter = function(input) {
    var stringLength = (input.length / 2).toFixed();
    var letter = input.charAt(stringLength - 1);
    return letter;
    // return letter + input + lastFirstLetters(input);
  }

// scrambleInput() builds a new sentence by calling singleLetter() and lastFirstLetters() on the user input.
  var scrambleInput = function(input) {
    return singleLetter(input) + input + lastFirstLetters(input);
  }

// cipher() is the main function that returns an encoded sentence using user's input
  var cipher = function(input) {
    var keyText =  scrambleInput(input);
    var encodedString = "";
    for (var i = keyText.length - 1; i >= 0; i--) {
      encodedString += keyText[i];
    }
    return encodedString;
    // console.log(encodedString);
  }

// getInput() returns a String that the user inputs via prompt
  var getInput = function() {
    return prompt("What sentence would you like to encrypt?")
  }

  var uncodedText = getInput();
  var codedText = cipher(uncodedText);

// add click events to spy images
  $(".white-spy").click(function(){
    alert(uncodedText);
  });
  $(".black-spy").click(function(){
    alert(codedText);
  });

});
