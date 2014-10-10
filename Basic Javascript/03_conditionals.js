var conditional1 = function (typing, message) {
  if(typing) {
    console.log(message);
  }
};

var conditional2 = function (teacher) {
  if(teacher.isThirsty){
    teacher.drink();
  }
};

var conditional3 = function (me) {
  var son = me.son;
  if(me.shaved){
    son.kissTimes(me, 2);
  } else {
    son.kissTimes(me, 0);
  }
};

var buyMovieTicket = function (cinema, seat, creditCard, movie){
  if(cinema.isFreeSeat(seat) && creditCard.hasMoney()){
    return movie.buyTicket();
  }else{
    throw new Error("Something goes wrong you can't see " + movie.name);
  }
};

var liftPanel = function (lift, floor){
  // My building has 3 floors.
  switch(floor) {
    case 1:
      lift.goToFirstFloor();
      break;
    case 2:
      lift.goToSecondFloor();
      break;
    case 3:
      lift.goToThirdFloor();
      break;
    default:
      lift.dontMove();
      break;
  }
};

// Falsy values
// http://www.codeproject.com/Articles/713894/Truthy-Vs-Falsy-Values-in-JavaScript