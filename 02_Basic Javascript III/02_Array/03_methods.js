var arr = [50,29,77,98];
console.log('Before reduce:', arr);
arr.forEach(function (item, index, array) {
  console.log('Item ' + index + ':', item);
});

console.log('Index of 77 in arr:', arr.indexOf(77));

console.log('Before reduce:', arr);
var reduced = arr.reduce(function(prev, current, index, array){
  return prev + current;
});
console.log('Reduced:', reduced);

var arr2;
arr2 = arr.map(function (item, index, array){
  return item * 2;
});
console.log('Duplicate value:', arr2);

var arr3 = arr.concat(); // Copy array.
var arr4 = arr.splice(0); // Copy array;
console.log('Master array to copy:', arr);
console.log('Copy array with concat:', arr3);
console.log('Copy array with splice:', arr4);

console.log('Before reverse:', arr3);
arr3.reverse();
console.log('After reverse:', arr3);

console.log('Array to string:', arr.join('#'));

console.log('Get a portion of array:', arr.slice(0,2));
console.log('arr continues with all the elements using slice.');

console.log('arr only will contain 2 elements using splice:', arr.splice(0, 2));