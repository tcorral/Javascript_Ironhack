( function () {
  var test = 'test';
  var num = 999;
  var oDate = new Date();
  var alert = function (message) {
    console.log('WTF!!!!');
  };

  console.log(test);
  console.log(num);
  console.log(oDate);
  console.log(alert);

  console.log(window.test);
  console.log(window.num);
  console.log(window.oDate);
  console.log(window.alert);

  alert();
}());
console.log(num);
console.log(test);
console.log(oDate);
alert('Hola mundo');