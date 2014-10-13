function timedProcessArray(items, process, callback){
  var todo = items.concat(); // Array clone

  setTimeout(function(){
    var start = +new Date();

    do{
      process(todo.shift());
    }while(todo.length > 0 && (+new Date() - start < 50));

    if(todo.length > 0){
      setTimeout(arguments.callee, 25);
    }else{
      callback(items);
    }
  }, 25);
}
console.time('DrawTable');
var content = ['<table>', '<tbody>'];

var colsLength = 10;
var indexCol;


// Create header
content.push('<tr>');
for(indexCol = 0; indexCol < colsLength; indexCol++) {
  content.push('<th>Header ' + indexCol + '</th>');
}
content.push('</tr>');
var indexRow = 0;
timedProcessArray(new Array(10), function (item) {
  content.push('<tr>');
  for(indexCol = 0; indexCol < colsLength; indexCol++) {
    content.push('<td>Cell [' + indexRow + ',' + indexCol + ']</td>');
  }
  content.push('</tr>');
  indexRow++;
}, function (array) {
  content.push('</tbody>', '</table>');
  document.body.innerHTML = content.join('');
});


console.timeEnd('DrawTable');