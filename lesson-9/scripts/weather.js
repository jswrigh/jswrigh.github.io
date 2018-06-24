let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=4156210&units=imperial&APPID=123e236852641b9b3bfd755ffa553566";
weatherRequest.open("GET",apiURL,true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    let franklinWeather = {"current-temp":weatherData.list[0].main.temp, "current-description":weatherData.list[0].weather[0].main, "high-temp":weatherData.list[0].main.temp_max, "low-temp":weatherData.list[0].main.temp_min, "wind-speed":weatherData.list[0].wind.speed, "weather-icon":weatherData.list[0].weather[0].icon};
    console.log(franklinWeather);
    document.getElementById("franklin-temp").innerHTML = franklinWeather["current-temp"];
    document.getElementById("franklin-low").innerHTML = franklinWeather["low-temp"];
    document.getElementById("franklin-high").innerHTML = franklinWeather["high-temp"];
    document.getElementById("franklin-wind").innerHTML = franklinWeather["wind-speed"];
    document.getElementById("franklin-icon").src = 'https://openweathermap.org/img/w/' + franklinWeather["weather-icon"]+'.png';
}