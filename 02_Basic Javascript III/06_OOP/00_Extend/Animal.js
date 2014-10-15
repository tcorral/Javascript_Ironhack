var Animal = {
  name: '',
  weight: 0,
  sound: '',
  legs: 0,
  energy: 0,
  sleep: function () {
    console.log(this.name + ' is sleeping!');
    this.energy += 10;
  },
  move: function (meters) {
    console.log(this.name + ' is moving.');
    this.energy -= meters / 4;
  },
  eat: function () {
    console.log(this.name + ' is eating.');
    this.energy += 50;
  },
  makeSound: function () {
    console.log(this.sound);
  }
};