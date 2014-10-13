var test = function () {
  console.log('test');
};

function test2 () {
  console.log('test2');
}

var test3 = new Function('arg1', 'arg2', 'console.log("test3");console.log(arg1); console.log(arg2);');

