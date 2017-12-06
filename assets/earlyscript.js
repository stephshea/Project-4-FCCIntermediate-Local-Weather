/*global $*/
/*global navigator*/
$(document).ready(function() {
var data;
var weather;
var temp;
var tempK;
var tempF;
var tempC;

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
  data: {lat: lat, lon: lon, appid:'ae36112ec88d99f153f8a75484b09f50'}, 
  dataType: "jsonp",
  success: function(data) {
      var displayWeather = display(data);
        $("#data").html(displayWeather);

// $("#city").html(city);
//  console.log(data);
//  console.log(data.city[0].name);
//  // console.log(JSON.stringify(data)); //to string

 // var city = this.data.name;
 // city = document.createElement("li");
	// 					city.innerHTML = city;
 
  // $("#tempK").html(tempK);
  
 
 
  },
  
  
 });
 

 
 
  }
}); 

function display(data) {
    
    return "<h3>City: " + data.name + "</h3>" + "<h3>Main weather: " + data.weather[0].main + "</h3>" + 
    
    
    "<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>" + "<h3>Description: " + data.weather[0].description + "</h3>" +
    "<h3>Temp: " + data.main.temp.toFixed(0) + " &#8457;</h3>" + 
    "<h3>Humidity: " + data.main.humidity + "</h3>"; 
    
    
}