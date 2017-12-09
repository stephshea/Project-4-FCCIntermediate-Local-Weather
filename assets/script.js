/*global $*/
/*global navigator*/
$(document).ready(function() {
	//Get location
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			showLocation(position);
			console.log(position.coords.longitude);
			console.log(position.coords.latitude);
		})
	}

	function showLocation(position) {
		var lon = position.coords.longitude;
		var lat = position.coords.latitude;
		//Get data
		$.get({
			url: 'https://api.openweathermap.org/data/2.5/weather?&units=imperial',
			//pass in lat and lon from showLocation
			data: {
				lat: lat,
				lon: lon,
				apiKEY: 'APIKEY'
			},
			dataType: "jsonp",
			success: function(data) {
				var displayWeather = display(data);
				$("#data").html(displayWeather);
			},
		});
	}

	function display(data) {
		var now = new Date();
		var icon = data.weather[0].icon;
		var wind = data.wind.speed;
		wind = wind.toFixed(0);
		// var time = data.dt;
		// time = time / 1000;
		// var hours = time.getHours()
		//  console.log(hours);
		// var day = data.sunrise;
		var weather = data.weather.description;
		var temp = data.main.temp;
		var fTemp = data.main.temp;
		fTemp = fTemp.toFixed(0);
		var cTemp;
		cTemp = (temp - 32) * 5 / 9;
		cTemp = cTemp.toFixed(0);
		$('#now').html("<p>" + now + "</p>");
		$("#city").html("<h2>in " + data.name + "</h2>");
		$(".switch").html("<h3>Current Temp: " + fTemp + "&#8457;</h3>");
		$(".switch2").html("<h3>Current Temp: " + cTemp + "&#8451;</h3>");
		//clear sky -
		if (data.weather[0].icon === "01d") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1501769630498-260b0ac4458d?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-day-sunny');
		}
		//few clouds -
		else if (data.weather[0].icon === "02d") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1493305457700-d3d24daf8c8c?auto=format&fit=crop&w=668&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-day-sunny');
		}
		//scattered clouds -
		else if (data.weather[0].icon === "03d") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1505064750047-f810f700e6d3?auto=format&fit=crop&w=1650&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-day-sunny');
		}
		//broken clouds -
		else if (data.weather[0].icon === "04d") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1438045809872-34a58ff469f6?auto=format&fit=crop&w=2322&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-day-cloudy');
		}
		//shower rain -
		else if (data.weather[0].icon === "09d") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1420496854436-ae64eb61e937?auto=format&fit=crop&w=1100&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-day-showers');
		}
		//rain -
		else if (data.weather[0].icon === "10d") {
			$('body').css('background-image', 'url(https://media3.giphy.com/media/TVpeXDi8xTlyo/giphy.gif)');
			$('#icon').attr('class', 'wi wi-day-rain');
		}
		//thunderstorm -
		else if (data.weather[0].icon === "11d") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1503611189418-538abfabef5b?auto=format&fit=crop&w=1644&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-day-thunderstorm');
		}
		//SNOW
		else if (icon === "13d") {
			$('body').css('background-image', 'url(https://media.giphy.com/media/4yOSZvJVQuwDu/giphy.gif)');
			$('#icon').attr('class', 'wi wi-snow');
		}
		//mist
		else if (data.weather[0].icon === "50d") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1438803235109-d737bc3129ec?auto=format&fit=crop&w=1566&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-day-fog');
		}
		//clear sky -
		else if (data.weather[0].icon === "01n") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=1652&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-night-clear');
		}
		//few clouds -
		else if (data.weather[0].icon === "02n") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1495430288918-03be19c7c485?auto=format&fit=crop&w=668&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi-night-clear');
		}
		//scattered clouds
		else if (data.weather[0].icon === "03n") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=1652&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-night-partly-cloudy');
		}
		//broken clouds -
		else if (data.weather[0].icon === "04n") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1495430288918-03be19c7c485?auto=format&fit=crop&w=668&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-night-alt-cloudy');
		}
		//shower rain
		else if (data.weather[0].icon === "09n") {
			$('body').css('background-image', 'url(https://media.giphy.com/media/nEKxwMsFLemlO/giphy.gif)');
			$('#icon').attr('class', 'wi wi-night-alt-showers');
		}
		//rain -
		else if (data.weather[0].icon === "10n") {
			$('body').css('background-image', 'url(https://media.giphy.com/media/nEKxwMsFLemlO/giphy.gif)');
			$('#icon').attr('class', 'wi wi-night-rain');
		}
		//thunderstorm -
		else if (data.weather[0].icon === "11n") {
			$('body').css('background-image', 'url(https://giphy.com/gifs/storm-lightning-thunder-DV993b1od2vcs)');
			$('#icon').attr('class', 'wi wi-night-thunderstorm');
		}
		//SNOW -
		else if (data.weather[0].icon === "13n") {
			$('body').css('background-image', 'url(https://media.giphy.com/media/E1v4GJ5LkcPHa/giphy.gif)');
			$('#icon').attr('class', 'wi wi-night-snow');
		}
		//mist -
		else if (data.weather[0].icon === "50n") {
			$('body').css('background-image', 'url(https://images.unsplash.com/photo-1438803235109-d737bc3129ec?auto=format&fit=crop&w=1566&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)');
			$('#icon').attr('class', 'wi wi-night-fog');
		}
		return "<h3>" + data.weather[0].main + "<h3 id='icon'>" + data.weather[0].description + "<img src='https://openweathermap.org/img/w/" + icon + ".png'></h3>" + "<h3>Wind: " + wind + " mph</h3>" + "<h3>Humidity: " + data.main.humidity + "%</h3>";
	}
	//F and C button http://api.jquery.com/toggle/
	$("#tempSwitch").click(function() {
		$(".switch").toggle();
		$("#tempSwitch") + $(".switch2").toggle();
	});
});
//get zip and display related data
$(document).ready(function() {
	$('#getWeatherZip').click(function() {
		var zip = $('#zip').val();
		if (zip != "") {
			$.ajax({
				url: 'https://api.openweathermap.org/data/2.5/weather?zip=' + zip + "&units=imperial" + "&APPID=APIKEY",
				type: 'GET',
				dataType: 'json',
				success: function(abby) {
					var wind = abby.wind.speed;
					wind = wind.toFixed(0);
					var tempZ = abby.main.temp;
					var nameZ = abby.name;
					var fTempZ = abby.main.temp;
					fTempZ = fTempZ.toFixed(0);
					var cTempZ;
					cTempZ = (tempZ - 32) * 5 / 9;
					cTempZ = cTempZ.toFixed(0);
					var weatherZ = showWeather(abby);
					$('#error2').html('');
					$("#city2").html("<h2>in " + nameZ + "</h2>");
					$(".switchZip").html("<h3>Current Temp: " + fTempZ + "&#8457;</h3>");
					$(".switch2Zip").html("<h3>Current Temp: " + cTempZ + "&#8451;</h3>");
					$('#display2').html(weatherZ);
				}
			});
		} else {
			$('#error2').html('you must type a zip code');
		}
	});

	function showWeather(abby) {
		return "<h3>" + abby.weather[0].main + "</h3>" + "<h3>" + abby.weather[0].description + "<img src='https://openweathermap.org/img/w/" + abby.weather[0].icon + ".png'></h3>" + "<h3>Wind: " + abby.wind.speed.toFixed(0) + " mph</h3>" + "<h3>Humidity: " + abby.main.humidity + "%</h3>";
	}
	$("#tempSwitchZip").click(function() {
		$(".switchZip").toggle();
		$("#tempSwitchZip") + $(".switch2Zip").toggle();
	});
});