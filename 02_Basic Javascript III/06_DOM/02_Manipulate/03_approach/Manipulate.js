console.time('Add a list');
// Create element programatically.
var ul = document.createElement('ul');
var arr = [];
var itemsLength2 = 4;
var index2;
for(index2 = 0; index2 < itemsLength2; index2++){
  arr.push('<li>Item ' + index2 + '</li>');
}
ul.innerHTML = arr.join('');
document.body.appendChild(ul);
console.timeEnd('Add a list');