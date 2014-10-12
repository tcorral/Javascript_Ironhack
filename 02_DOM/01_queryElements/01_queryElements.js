var secondContent = document.getElementById('second');
console.log('Returns the element with the id.', secondContent);

var nullElementById = document.getElementById('secondary');
console.log('Returns null if the element with the id does not exist.', nullElementById);

var divs = document.getElementsByTagName('div');
console.log('Returns a nodeList with all the div elements.', divs);

var genderRadioButtons = document.getElementsByName('gender');
console.log('Returns a nodeList with all the elements with name gender', genderRadioButtons);

var all = document.getElementsByTagName('*');
console.log('Returns a nodeList with all the elements in the page', all);
//------------------------------------------------------------------

var inputs = document.querySelectorAll('input');
console.log('Returns a nodeList with all the input elements.', inputs);

var input = document.querySelector('input');
console.log('Returns the first input element', input);

//Explain how IE works with id and names
//Explain that querySelector and querySelectorAll exist only in IE10^, Firefox, Chrome.


