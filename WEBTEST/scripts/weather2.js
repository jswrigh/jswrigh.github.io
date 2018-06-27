function getWeather(cityName, cityCode) {
    let weatherRequest = new XMLHttpRequest();
    let apiURL = "https://api.openweathermap.org/data/2.5/forecast?id="+cityCode+"&units=imperial&APPID=123e236852641b9b3bfd755ffa553566";
    weatherRequest.open("GET",apiURL,true);
    weatherRequest.send();
    weatherRequest.onload =  function () {
        let weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        let theWeather = {"current-temp":weatherData.list[0].main.temp, "current-description":weatherData.list[0].weather[0].main, "high-temp":weatherData.list[0].main.temp_max, "low-temp":weatherData.list[0].main.temp_min, "wind-speed":weatherData.list[0].wind.speed, "weather-icon":weatherData.list[0].weather[0].icon};
        console.log(theWeather);
        document.getElementById(cityName+"-temp").innerHTML = theWeather["current-temp"];
        document.getElementById(cityName+"-low").innerHTML = theWeather["low-temp"];
        document.getElementById(cityName+"-high").innerHTML = theWeather["high-temp"];
        document.getElementById(cityName+"-wind").innerHTML = theWeather["wind-speed"];
        document.getElementById(cityName+"-icon").src = 'https://openweathermap.org/img/w/' + theWeather["weather-icon"]+'.png';
    }
}
getWeather("franklin","4156210");