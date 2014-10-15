console.time('Add a list');
//Create element programatically.
var ul = document.createElement('ul');
document.body.appendChild(ul);
var itemsLength = 4;
var index;
var li;
for(index = 0; index < itemsLength; index++){
  li = document.createElement('li');
  li.innerHTML = 'Item ' + index;
  ul.appendChild(li);
}
console.timeEnd('Add a list');