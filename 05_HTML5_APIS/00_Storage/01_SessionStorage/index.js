console.log('Key:', sessionStorage.getItem('key'));
console.log('Key2:', sessionStorage.getItem('key2'));

sessionStorage.setItem('key', 'value');
sessionStorage.setItem('key2', 'value2');

console.log('Key:', sessionStorage.getItem('key'));
console.log('Key2:', sessionStorage.getItem('key2'));

sessionStorage.removeItem('key');

console.log('Key:', sessionStorage.getItem('key'));
console.log('Key2:', sessionStorage.getItem('key2'));

sessionStorage.clear();

console.log('Key:', sessionStorage.getItem('key'));
console.log('Key2:', sessionStorage.getItem('key2'));