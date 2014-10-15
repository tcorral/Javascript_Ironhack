var Animal = function (){
  this.energy = 0;
};
Animal.prototype = {
  born: function (){
    this.energy = 1;
    console.log('A new Animal has born.');
  },
  die: function () {
    this.energy = 0;
    console.log('A new Animal has died.');
  },
  eat: function () {
    this.energy++;
    console.log('Yumm! I am eating..');
  },
  makeSound: function () {
    throw new Error('This method should be overwritten');
    //console.log('This method should be overwritten.');
  }
};