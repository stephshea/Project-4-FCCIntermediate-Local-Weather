/*global $*/
/*global navigator*/

  
$(document).ready(function() {
//Get location
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


//Get data
$.ajax({
  method: 'GET',
  url: 'https://api.openweathermap.org/data/2.5/weather?&units=imperial',
  //pass in lat and lon from showLocation
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
    var wind = data.wind.speed;
    // var time = data.dt;
    // time = time / 1000;
    // var hours = time.getHours()
    //  console.log(hours);
    // var day = data.sunrise;
    var weather = data.weather.description;
    var icon = data.weather.icon;
    var temp = data.main.temp;
    var fTemp = data.main.temp;
    fTemp = (fTemp.toFixed(0));
    var cTemp;
    cTemp = (temp - 32) * 5 / 9;
    cTemp = (cTemp.toFixed(0));
     $("#city").html("<h2>In " + data.name +"</h2>");
    $(".switch").html("<h3>Current Temp: " + fTemp + "&#8457;</h3>");
     $(".switch2").html("<h3>Current Temp: " + cTemp + "&#8451;</h3>");
    
    //clear sky -
 if (icon = "01d") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=1652&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 //few clouds -
 else if (icon = "02d") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1493305457700-d3d24daf8c8c?auto=format&fit=crop&w=668&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 //scattered clouds -
 else if (icon = "03d") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1505064750047-f810f700e6d3?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 //broken clouds -
 else if (icon = "04d") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1438045809872-34a58ff469f6?auto=format&fit=crop&w=2322&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 //shower rain -
 else if (icon = "09d") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1420496854436-ae64eb61e937?auto=format&fit=crop&w=1100&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 
 //rain -
 else if (icon = "10d") {
 $('body').css('background-image', 'url(https://media3.giphy.com/media/TVpeXDi8xTlyo/giphy.gif)');
 }
 
 //thunderstorm -
else if (icon = "11d") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1503611189418-538abfabef5b?auto=format&fit=crop&w=1644&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
  //SNOW
 else if (icon = "13d") {
 $('body').css('background-image', 'url(https://giphy.com/gifs/fun-adorable-snow-6YNgoTEPs6vZe)');
 }
 
  //mist
 else if (icon = "50d") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1438803235109-d737bc3129ec?auto=format&fit=crop&w=1566&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 
     //clear sky -
 else if (icon = "01n") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=1652&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 //few clouds -
 else if (icon = "02n") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1495430288918-03be19c7c485?auto=format&fit=crop&w=668&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 //scattered clouds
 else if (icon = "03n") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1495430288918-03be19c7c485?auto=format&fit=crop&w=668&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 //broken clouds -
 else if (icon = "04n") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1495430288918-03be19c7c485?auto=format&fit=crop&w=668&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 //shower rain
 else if (icon = "09n") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=1652&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 
 //rain -
 else if (icon = "10n") {
 $('body').css('background-image', 'url(https://media1.giphy.com/media/Zzph34dB6LqNO/200w.webp#11-grid3)');
 }
 
 //thunderstorm -
 else if (icon = "11n") {
 $('body').css('background-image', 'url(https://giphy.com/gifs/storm-lightning-thunder-DV993b1od2vcs)');
 }

  //SNOW -
 else if (icon = "13n") {
 $('body').css('background-image', 'url(https://media1.giphy.com/media/Zzph34dB6LqNO/200w.webp#11-grid3)');
 }
 
  //mist -
 else if (icon = "50n") {
 $('body').css('background-image', 'url(https://images.unsplash.com/photo-1438803235109-d737bc3129ec?auto=format&fit=crop&w=1566&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
 }
 
    return "<h3>" + data.weather[0].description + "<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'></h3>" + "<h3>Wind: " + wind + "MPH</h3>" +
    "<h3>Humidity: " + data.main.humidity + "%</h3>"; 
}
$("#tempSwitch").click(function() {
  $(".switch").toggle();
  $("#tempSwitch") + $( ".switch2" ).toggle(); 
});

