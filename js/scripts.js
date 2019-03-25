$(function() {
  var sentence = prompt("What do you like to do in your free time?");

  console.log(sentence);

  var newstring = function(sentence) {

    var stringlength = sentence.length;
    console.log(stringlength);

    var firstletter = sentence.charAt(0).toUpperCase();
    console.log(firstletter);

    var lastletter = sentence.charAt(stringlength - 1).toUpperCase();
    console.log(lastletter);

    var midletters = sentence.slice(1, stringlength - 1);
    console.log(midletters);

    return firstletter + lastletter;
  }

    // console.log(newstring(sentence));

  var newStringReverse = function(sentence) {
    var stringlength = sentence.length;
    console.log(stringlength);

    var firstletter = sentence.charAt(0).toUpperCase();
    console.log(firstletter);

    var lastletter = sentence.charAt(stringlength - 1).toUpperCase();
    console.log(lastletter);

    var midletters = sentence.slice(1, stringlength - 1);
    console.log(midletters);

    return lastletter + firstletter;

  }
  // console.log(newStringReverse(sentence));

  var shortString = function(sentence) {

    console.log(newstring(sentence));
    console.log(newStringReverse(sentence));
  }

    shortString(sentence);
});
