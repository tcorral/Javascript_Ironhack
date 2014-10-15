(function (doc) {
  var str = 'dato';
  function execute(){
    var data = 'data';
    console.log('data inside execute:', data);
    console.log('str outside execute:', str);
    console.log(doc);
  }
  console.log('str in scope:', str);
  console.log('data does not exist outside execute:', typeof data);
  execute();
  console.log('data does not exist outside execute 2:', typeof data);
}(document));
console.log('str does not exist outside of IIFE', typeof str);
console.log('data does not exist outside of IIFE', typeof data);