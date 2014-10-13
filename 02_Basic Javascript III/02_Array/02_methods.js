var arr = [];
arr[5] = 'item';
console.log('The first five elements are undefined:', arr);

var arr1 = [1,3,5,6];
var firstElement = arr1[0];
var lastElement = arr1[arr1.length-1];
console.log('First Element:', firstElement);
console.log('Last Element:', lastElement);

arr = [];
console.log('The array contains 0 elements:', arr.length, arr);
arr.push(1);
arr.push(2);
arr.push(3);
console.log('The array contains 3 elements:', arr.length, arr);

arr = [1,2,3,4,5,6];
console.log('arr contains 6 items:', arr.length, arr);
var item = arr.pop();
console.log('Pop returns the last element (6):', item);
console.log('arr contains 5 items:', arr.length, arr);

arr = [1,2,3,4,5,6];
console.log('arr contains 6 items:', arr.length, arr);
var item2 = arr.shift();
console.log('Shift returns the first element (6):', item2);
console.log('arr contains 5 items:', arr.length, arr);

arr = [2,3,4,5,6];
console.log('arr contains 5 items', arr.length, arr);
arr.unshift(1);
console.log('arr contains 6 items:', arr.length, arr);

var arr2 = [1,2,3];
var arr3 = [4,5,6];
console.log('Concatenate arrays:', arr2.concat(arr3));

var arr4 = [6,3,56];
console.log('Unsorted array:', arr4);
arr4.sort();
console.log('Sorted array:', arr4);

var arr5 = [1,7,83,10,0];
console.log('Unsorted array:', arr5);
arr5.sort(function (first, second){
  return second < first;
});
console.log('Sorted array by callback:', arr5);