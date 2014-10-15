var Dog = function (race, name){
  Canine.apply(this);
  this.race = race || '';
  this.name = name || '';
};
Dog.prototype = new Canine();
Dog.prototype.setName = function (name){
  this.name = name;
};