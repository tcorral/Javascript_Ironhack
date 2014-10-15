function getLocation() {
  var geolocation = navigator.geolocation;
  geolocation.getCurrentPosition(showLocation, errorHandler,
    {maximumAge: 75000});
}
//http://www.tutorialspoint.com/html5/html5_geolocation.htm