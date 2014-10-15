console.log('Key:', localStorage.getItem('key'));
console.log('Key2:', localStorage.getItem('key2'));

localStorage.setItem('key', 'value');
localStorage.setItem('key2', 'value2');

console.log('Key:', localStorage.getItem('key'));
console.log('Key2:', localStorage.getItem('key2'));

localStorage.removeItem('key');

console.log('Key:', localStorage.getItem('key'));
console.log('Key2:', localStorage.getItem('key2'));

localStorage.clear();

console.log('Key:', localStorage.getItem('key'));
console.log('Key2:', localStorage.getItem('key2'));