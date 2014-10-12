// Get functions borrowed.

if(!Array.prototype.getMaxValue){
  Array.prototype.getMaxValue = function (){
    return Math.max.apply(Math, this);
  };
}
console.log('Get max value using Math.max:', [2,3,92,6,3,1,12,44].getMaxValue());

// Function.prototype.bind