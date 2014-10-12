var Animal = function (name, weight, sound, legs) {
  this.name = '';
  this.weight = 0;
  this.sound = '';
  this.legs = 0;
  this.energy = 0;
};
Animal.protype = {
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