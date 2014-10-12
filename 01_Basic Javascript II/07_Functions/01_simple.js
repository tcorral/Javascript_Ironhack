var showMessage = function () {
  console.log('Message');
};

//showMessage();

function showHelloMessage() {
  console.log('Hello Message');
}

// showHelloMessage();

function showMessageByArgument(message) {
  console.log(message);
}

// showMessageByArgument('Hello Ironhackers');

function outerFunction(){
  console.log('Outer function');
  function innerFuntion(){
    console.log('Inner function');
  }
  innerFuntion();
}

// outerFunction();

function executeCallback(getMessage){
  console.log(getMessage());
}

// executeCallback(function () { return 'Message executed'; });

function curryingFunctions( date ) {
  return function () {
    console.log('Time elapsed from currying: ', new Date().getTime() - date.getTime());
  };
}

//var curriedFunction = curryingFunctions(new Date());
//curriedFunction();
// curriedFunction();
// curriedFunction();