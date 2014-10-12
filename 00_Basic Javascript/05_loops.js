for(initialize; conditional; increment){
  // code to execute per each item in the array
}

while(conditional) {
  // code to execute while the condition is true.
}

do{
  // this code will be executed at least one time.
}while(conditional);


for( key in object ){
  // code to execute per each property of an object.
  if(object.hasOwnProperty(key)){
    // code to execute per each property of an object
    // not inherited.
  }
}


var myFriends = ['Aleix', 'Aida', 'Miguel'];

var givePresent = function (friend) {
  console.log('Hi ' +  friend + ' I give away this present because you are my friend.');
};
var givePresentToAllMyFriends = function (myFriends) {
  var index;
  var friend;
  var friendsLength = myFriends.length;
  for(index = 0; index < friendsLength; index++) {
    friend = myFriends[index];
    givePresent(friend);
  }
};

givePresentToAllMyFriends(myFriends);

//----------------------------------------------------

var breakfastBuyList = ['Butter', 'Bread', 'Bacon', 'Tea'];
var shoppingCart = [];
var buyItem = function (item, shoppingCart) {
  shoppingCart.push(item);
  console.log('You bought ' + item);
};

var buyWhatINeedForBreakfast = function (buyList) {
  var item = buyList.shift();
  while(item){
    buyItem(item, shoppingCart);
    item = buyList.shift();
  }
};

buyWhatINeedForBreakfast(breakfastBuyList);

//---------------------------------------------------

var dishesQty = 10;
var glassesQty = 6;
var cleanDish = function () {
  console.log('You cleaned a dish');
};
var cleanGlash = function () {
  console.log('You cleaned a glass');
};
var cleanCrockery = function () {
  var dishesCounter = 0;
  var glassesCounter = 0;
  while(dishesCounter < dishesQty){
    cleanDish();
    dishesCounter++;
  }
  console.log('You cleaned ' + dishesQty + ' dishes');

  while(glassesCounter < glassesQty){
    cleanGlash();
    glassesCounter++;
  }
  console.log('You cleaned ' + glassesQty + ' glashes');
};

cleanCrockery();

