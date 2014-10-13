(function () {
  var obj = {
    data: 'data'
  };

  function execute(){
    console.log('this.data: ', this.data);
  }

  execute();

  execute.call(obj);

  execute.apply(obj);

}());