var position = "position test".indexOf('test');
console.log('Position of test in string:', position);

var a = ("part")[1];
console.log('Character using array notation:', a);

var r = ("part").charAt(2);
console.log('Character using charAt:', r);

var codeRLowercase = "Character".charCodeAt(3);
console.log('Character code of r:', codeRLowercase);

var stringLowercase = "HI HOW ARE YOU";
console.log(stringLowercase.toLowerCase());

var stringUppercase = "hi how are you";
console.log(stringUppercase.toUpperCase());

var compareLocaleString_1 = "ab";
var compareLocaleString_2 = "cd";
console.log(compareLocaleString_2.localeCompare(compareLocaleString_1));
console.log(compareLocaleString_1.localeCompare(compareLocaleString_1));
console.log(compareLocaleString_1.localeCompare(compareLocaleString_2));

var codeChar = String.fromCharCode('64');
console.log('Character from code:', codeChar);

var matchString = "Hello this is a string";
console.log('An array of matches:', matchString.match('is'));

var matchString2 = "Hello this is a string";
console.log('An array of matches:', matchString2.match(/is/g));

var string_1 = "To be or not to be";
console.log('Replace be for buy - not global:', string_1.replace('be', 'buy'));

var string_2 = "To be or not to be";
console.log('Replace be for buy - global:', string_2.replace(/be/g, 'buy'));

var string_3 = "To be or not to be";
console.log('string_3 before replace:', string_3);
var string_3_0 = string_3.replace(/t/ig, function (str, offset, string){
  console.log('--', str, offset, string);
  return 'X';
});
console.log('Replace t for X', string_3_0);
console.log('string_3 after replace:', string_3);
console.log('replace return the replaced value but do not modify the original value');
console.log('string_3_0 :', string_3_0);


var sentence = "To be or not to be";
console.log('Get an array of words:', sentence.split(" "));

var total = "To be or not to be";
console.log('Get not using substr:', total.substr(9, 3));

var total2 = "To be or not to be";
console.log('Get or using slice:', total2.slice(6, 8));