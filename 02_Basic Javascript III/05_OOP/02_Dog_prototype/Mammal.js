var Mammal = function (name, weight, sound, legs) {
  Animal.apply(this, arguments);
};
Mammal.prototype = new Animal();
