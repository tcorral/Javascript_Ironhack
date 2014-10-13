var Transportation = function (type, seats, drivers, energyCapacity) {
  this.type = type;
  this.seats = seats;
  this.drivers = drivers;
  this.energyCapacity = 0;
};
Transportation.prototype = {
  start: function () {
    console.log('start trip');
  },
  end: function () {
    console.log('end trip');
  },
  fillEnergy: function () {
    console.log('fill energy');
  }
};

var Vehicle = function (seats, drivers, energyCapacity, tires) {
  Transportation.apply(this, ['ground', seats, drivers, energyCapacity]);
  this.tires = tires;
};
Vehicle.prototype = new Transportation();
Vehicle.prototype.drive = function () {
  console.log('Drive');
};
Vehicle.prototype.turnLeft = function () {
  console.log('Turn left');
};
Vehicle.prototype.turnRight = function () {
  console.log('Turn right');
};

var Car = function (seats, energyCapacity, color, hp){
  Vehicle.apply(this, [seats, 1, energyCapacity, 4]);
  this.color = color;
  this.hp = hp;
};
Car.prototype = new Vehicle();


