/*global $*/
/*global fTemp*/
/*global cTemp*/
/*global temp*/
/*global navigator*/

  
$(document).ready(function() {
var data;
var weather;
var temp;
var tempK;
var fTemp;
var cTemp;



  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
      
     showLocation(position);
      console.log(position.coords.longitude);
      console.log(position.coords.latitude);
    // $("#data").html("Your latitude: " + lat  + 
    // "<br>Your Longitude: " +long);
     }
  )}
  
  
  function showLocation(position) {
  var lon = position.coords.longitude;
  var lat = position.coords.latitude;



$.ajax({
  method: 'GET',
  url: 'https://api.openweathermap.org/data/2.5/weather?&units=imperial',
  data: {lat: lat, lon: lon, apiKEY:'ae36112ec88d99f153f8a75484b09f50'}, 
  dataType: "jsonp",
  success: function(data) {
      var displayWeather = display(data);
        $("#data").html(displayWeather);

  
 
 
  },
  
  
 });
 

 
 
  }
  
}); 

function display(data) {
    
    var temp = data.main.temp;
    var fTemp = data.main.temp;
    fTemp = (fTemp.toFixed(0));
    var cTemp;
    cTemp = (temp - 32) * 5 / 9;
    cTemp = (cTemp.toFixed(0));
    $(".switch").html(fTemp);
     $(".switch2").html(cTemp);
    
   

    
    return "<h3>City: " + data.name + "</h3>" + "<h3>Main weather: " + data.weather[0].main + "</h3>" + 
    
    
    "<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>" + "<h3>Description: " + data.weather[0].description + "</h3>" +
    "<h3>Temp: " + fTemp + "&#8457;</h3>" + "<h3>Celcius: " + cTemp + "&#8451;</h3>" +
    "<h3>Humidity: " + data.main.humidity + "%</h3>"; 
    
}

$( "#tempSwitch" ).click(function() {
  
  $( ".switch" ).toggle();
  $( "#tempSwitch" ) + $( ".switch2" ).toggle(); 
  
});