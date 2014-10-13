// Using Javascript with 10x10 and appending table after
// adding the rows and cells.
console.time('DrawTable');
//console.log(document.getElementById('table_template').innerHTML);
var template = _.template(document.getElementById('table_template').innerHTML);
document.body.innerHTML = template({
  rows: 10,
  headers: 10,
  cols: 10
});
console.timeEnd('DrawTable');