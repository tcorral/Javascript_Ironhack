// Using Javascript with 10x10 and appending table before+
// adding the rows and cells.
console.time('DrawTable');
var table = document.createElement('table');
var tbody = document.createElement('tbody');

var rowsLength = 10;
var colsLength = 10;
var indexRow;
var indexCol;

document.body.appendChild(table);

// Create header
var tr = document.createElement('tr');
var th;
for(indexCol = 0; indexCol < colsLength; indexCol++) {
  th = document.createElement('th');
  th.innerHTML = 'Header ' + indexCol;
  tr.appendChild(th);
  tbody.appendChild(tr);
}
// Create content rows
for(indexRow = 0; indexRow < rowsLength; indexRow++) {
  tr = document.createElement('tr');
  for(indexCol = 0; indexCol < colsLength; indexCol++) {
    td = document.createElement('td');
    td.innerHTML = 'Cell [' + indexRow + ',' + indexCol + ']';
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

table.appendChild(tbody);
console.timeEnd('DrawTable');