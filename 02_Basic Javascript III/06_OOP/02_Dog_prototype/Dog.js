var Dog = function (weight) {
  Mammal.apply(this, ['Dog', weight, 'Woff!', 4]);
};
Dog.prototype = new Mammal();
