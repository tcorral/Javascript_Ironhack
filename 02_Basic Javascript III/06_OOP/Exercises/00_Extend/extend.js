var extend = function (source, target) {
  var key;
  for(key in source){
    if(source.hasOwnProperty(key)){
      if(!target[key]){
        target[key] = source[key];
      }
    }
  }
  return target;
};