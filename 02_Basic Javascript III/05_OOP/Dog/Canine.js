var Canine = function () {
  Animal.apply(this);
  this.legs = 4;
  this.eatType = 'carnivore';
};
Canine.prototype = new Animal();