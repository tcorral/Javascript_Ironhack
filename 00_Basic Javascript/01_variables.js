var name = 'Tomas';
var live = 'Barcelona';
var teach = 'Javascript';
var teacher = {
  name: 'Tomas',
  live: 'Barcelona',
  teach: 'Javascript',
  age: 38
};
var index = 0;
var isHandsome = true;
var hasLongHair = false;
var undefinedVariable;
var nulledValue = null;

var name = 'Tomas';
var live = 'Barcelona';
var teach = 'Javascript';
var teacher = [name, age, live, teach];
var students = [...];
for(var indexStudent = 0; indexStudent < 20; indexStudent++){
  console.log(students[indexStudent][1]);
}
for(var indexStudent = 0; indexStudent < 20; indexStudent++){
  console.log(students[indexStudent].live);
}