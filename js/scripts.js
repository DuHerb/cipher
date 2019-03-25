$(function() {
  var sentence = prompt("What do you like to do in your free time?");

  console.log(sentence);

  var newstring = function(sentence) {

    var stringlength = sentence.length;
    var firstletter = sentence.charAt(0).toUpperCase();
    var lastletter = sentence.charAt(stringlength - 1).toUpperCase();

    return firstletter + lastletter;
  };

  var newStringReverse = function(sentence) {
    var stringlength = sentence.length;
    var firstletter = sentence.charAt(0).toUpperCase();
    var lastletter = sentence.charAt(stringlength - 1).toUpperCase();

    return lastletter + firstletter;

  }

  var singleLetter = function(sentence) {

    var stringLength = (sentence.length / 2).toFixed();
    var letter = sentence.charAt(stringLength - 1);


    return letter + sentence + newStringReverse(sentence);
  }

  var shortString = function(sentence) {

    // console.log(newstring(sentence));
    // console.log(newStringReverse(sentence));
    return sentence + newStringReverse(sentence);

  }

  var cipher = function(sentence) {
    var word =  singleLetter(sentence);
    var newString = "";
    for (var i = word.length - 1; i >= 0; i--) {
      newString += word[i];
      // console.log(newString);
    }

    console.log(newString);
  }

    // console.log(shortString(sentence));
    // console.log(singleLetter(sentence));
    cipher(sentence);

});
// var midletters = sentence.slice(1, stringlength - 1);
