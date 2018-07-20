let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=4580543&units=imperial&APPID=123e236852641b9b3bfd755ffa553566";
weatherRequest.open("GET",apiURL,true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    let greenvilleWeather = {"current-temp":weatherData.list[0].main.temp, "current-description":weatherData.list[0].weather[0].main, "high-temp":weatherData.list[0].main.temp_max, "low-temp":weatherData.list[0].main.temp_min, "wind-speed":weatherData.list[0].wind.speed, "weather-icon":weatherData.list[0].weather[0].icon};
    console.log(greenvilleWeather);
    document.getElementById("greenville-temp").innerHTML = greenvilleWeather["current-temp"];
    document.getElementById("greenville-low").innerHTML = greenvilleWeather["low-temp"];
    document.getElementById("greenville-high").innerHTML = greenvilleWeather["high-temp"];
    document.getElementById("greenville-wind").innerHTML = greenvilleWeather["wind-speed"];
    document.getElementById("greenville-icon").src = 'https://openweathermap.org/img/w/' + greenvilleWeather["weather-icon"]+'.png';
}