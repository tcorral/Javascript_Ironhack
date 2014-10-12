var Lassie = function (weight) {
  Dog.apply(this, [weight]);
};
Lassie.prototype = new Dog();