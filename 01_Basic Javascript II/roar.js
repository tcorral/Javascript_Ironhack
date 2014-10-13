var element = document.createElement('div');
var class = 'shown';
element.className = class;
document.body.appendChild(element);

$('#button').on('click', function () {
  var delete = 'hidden';
  element.className = delete;
});