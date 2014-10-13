console.time('Add a list');
// Create element programatically.
var arr = ['<ul>'];
var itemsLength2 = 4;
var index2;
for(index2 = 0; index2 < itemsLength2; index2++){
  arr.push('<li>Item ' + index2 + '</li>');
}
arr.push('</ul>');
document.body.innerHTML = arr.join('');
console.timeEnd('Add a list');