var glass = {
  dl: 0,
  maxDl: 20,
  positionDegrees: 0,
  _getHowMuchDlToFill: function () {
    return this.dl - this.maxDl;
  },
  fill: function (container) {
    var dlToFill = this._getHowMuchDlToFill();
    container.dl = container.dl - dlToFill;
    this.dl = this.maxDl;
    return this;
  },
  empty: function () {
    this.dl = 0;
  },
  tilt: function (degrees) {
    this.positionDegrees = degrees;
  }
};
var getBeverageBottle = function (beverage) {
  // Code to align the glass and the mouth
};
var alignGlassWithMouth = function (glass, mouth) {
  // Code to align the glass and the mouth
};
var pourWaterInMouth = function (glass, mouth) {
  // Code to align the glass and the mouth
};
var teacher = {
  name: 'Tomas',
  live: 'Barcelona',
  teach: 'Javascript',
  mouth: {
    close: function () {
      console.log('Mouth has been closed.');
      return this;
    },
    getBeverage: function () {
      console.log('Mouth is full of beverage');
    },
    open: function () {
      console.log('Mouth has been opened.');
      return this;
    }
  },
  drink: function (beverage) {
    var bottle = getBeverageBottle(beverage);
    glass.fill(bottle);
    this.mouth.open();
    alignGlassWithMouth(glass, this.mouth);
    pourWaterInMouth(glass, this.mouth);
    this.mouth.close();
    this.swallowBeverage();
  },
  swallowBeverage: function () {
    // More code...
  }
};

teacher.drink('water');