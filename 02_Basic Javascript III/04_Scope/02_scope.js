(function () {
  var obj = {
    data: 'data'
  };

  function execute(arg1, arg2, arg3){
    this.ironhack = 'Mola!';
  }

//  execute('window_1', 'window_2', 'window_3');

  console.log(obj);
  execute.call(obj, 'call_1', 'call_2', 'call_3');
  console.log(obj);
//
//  execute.apply(obj, ['apply_1', 'apply_2', 'apply_3']);

}());