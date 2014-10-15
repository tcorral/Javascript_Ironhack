var Persona = function (name, hairColor, race) {
  var id = Math.random().toString().substr(2);
  this.name = name || '';
  this.hairColor = hairColor || '';
  this.race = race || '';
  this.persona = true;
  this.getId = function () {
    return id;
  };
};
Persona.isPersona = function ( obj ) {
  return obj instanceof Persona;
};
Persona.prototype = {
  comer: function () {
    console.log('Estoy comiendo y soy' + this.name)
  }
};

var tomas = new Persona('Tomás', 'black', 'caucasian');

console.log(tomas);
