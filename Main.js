

function ShowTime() {

    var myVar = setInterval(myTimer, 1000);

function myTimer() {

    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


  const amPa = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;
  document.getElementById("time").innerHTML = today.toLocaleTimeString() ; 
}

}

ShowTime();    

function weatherBalloon( cityID ) {
    var key = '723a2e68e9e40311a19826d97b34079d';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Doetinchem,NL&appid=723a2e68e9e40311a19826d97b34079d')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  window.onload = function() {
    weatherBalloon( 2756766 );
  }

  function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
}

