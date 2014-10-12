// Using Javascript with 10x10 and appending table after
// adding the rows and cells.
console.time('DrawTable');
var content = ['<table>', '<tbody>'];

var rowsLength = 10;
var colsLength = 10;
var indexRow;
var indexCol;


// Create header
content.push('<tr>');
for(indexCol = 0; indexCol < colsLength; indexCol++) {
  content.push('<th>Header ' + indexCol + '</th>');
}
content.push('</tr>');

// Create content rows
for(indexRow = 0; indexRow < rowsLength; indexRow++) {
  content.push('<tr>');
  for(indexCol = 0; indexCol < colsLength; indexCol++) {
    content.push('<td>Cell [' + indexRow + ',' + indexCol + ']</td>');
  }
  content.push('</tr>');
}
content.push('</tbody>', '</table>');
document.body.innerHTML = content.join('');

console.timeEnd('DrawTable');