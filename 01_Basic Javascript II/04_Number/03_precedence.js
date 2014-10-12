var variable_1 = 20;
var variable_2 = 10;
var variable_3 = 50;
var result = variable_1 * variable_2 + variable_3;
console.log('Precedence - 20 * 10 + 50', result);

var variable_4 = 20;
var variable_5 = 10;
var variable_6 = 50;
var result2 = variable_4 * (variable_5 + variable_6);
console.log('Precedence - 20 * (10 + 50)', result2);

var variable_7 = 1000;
var variable_8 = 20;
var variable_9 = 2;
var result3 = variable_7 / variable_8 / variable_9;
console.log('Precedence - 1000 / 20 / 2', result3);

var variable_10 = 1000;
var variable_11 = 20;
var variable_12 = 2;
var result4 = variable_10 / (variable_11 / variable_12);
console.log('Precedence - 1000 / (variable_11 / variable_12)', result4);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence