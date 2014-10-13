function execute() {
  var data = 'data';
  this.variable_1 = 'variable 1';
  console.log('Data:', data);
  console.log('Variable_1:', this.variable_1);
}
execute();

console.log('Data __:', typeof data);
console.log('Variable_1 __:', this.variable_1);
