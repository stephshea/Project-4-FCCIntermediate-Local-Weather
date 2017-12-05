/*global $*/
/*global navigator*/
$(document).ready(function() {
 var long;
 var lat;
 
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
      
      long = position.coords.longitude;
      lat = position.coords.latitude;
    $("#data").html("Your latitude: " + lat  + 

    "<br>Your Longitude: " +long);

'https://api.openweathermap.org/data/2.5/weather?
