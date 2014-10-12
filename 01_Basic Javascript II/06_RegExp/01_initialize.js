var regExpConstructor = new RegExp('test');
var sentence = "Hi this is a test or not.";
console.log('Exist test in sentence constructor:', regExpConstructor.test(sentence));

var regExpDeclaration = /test/;
var sentence2 = "Hi this is a test or not";
console.log('Exist test in sentence declaration:', regExpDeclaration.test(sentence2));

