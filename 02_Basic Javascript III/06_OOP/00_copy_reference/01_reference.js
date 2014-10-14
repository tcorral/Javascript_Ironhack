// this function receives two arguments, the first should be an object and the second an array.
var arg_1 = {};
var arg_2 = [];
console.log(arg_1, arg_2);
function test(arg1, arg2){
  arg1['test'] = 'argumentTest';
  arg2.push('other_value');
}
test(arg_1, arg_2);
console.log(arg_1, arg_2);

function test2(arg1){ // What happens if we pass an String created with a constructor?
  arg1 += '_suffix';
}
var arg_3 = new String('hello');
console.log(arg_1, arg_2);
test2(arg_3);
console.log(arg_3);

function test3(arg1){ // What happens if we pass an String created with a constructor?
  arg1 = arg1.concat('_suffix');
}
var arg_4 = new String('hello');
test3(arg_4);
console.log(arg_4);