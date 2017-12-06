/*global $*/
/*global navigator*/
$(document).ready(function() {
 var long;
 var lat;
 var tempK;
 var tempF;
 var tempC;
 
 
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
      
     showWeather(position);
      console.log(position.coords.longitude);
      console.log(position.coords.latitude);
    // $("#data").html("Your latitude: " + lat  + 

    // "<br>Your Longitude: " +long);
     }
  )}
  
  
  function showWeather(position) {
  var long = position.coords.longitude;
      var lat = position.coords.latitude;


$.ajax({
  method: 'GET',
  url: 'https://api.openweathermap.org/data/2.5/weather',
  data: {lat: lat, lon: long, appid:'ae36112ec88d99f153f8a75484b09f50'}, 
  success: function(yay) {
  console.log(yay);
  
  },
  
  
 });
 
 $.getJSON(function(data){
  var city;
  var weatherType;
  console.log(city);
$("#city").html(city);
$("#weatherType").html(weatherType);
 
 });
 
 
  }
}); 
