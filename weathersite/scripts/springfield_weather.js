let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=4409896&units=imperial&APPID=123e236852641b9b3bfd755ffa553566";
weatherRequest.open("GET",apiURL,true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    let springfieldWeather = {"current-temp":weatherData.list[0].main.temp, "current-description":weatherData.list[0].weather[0].main, "high-temp":weatherData.list[0].main.temp_max, "low-temp":weatherData.list[0].main.temp_min, "wind-speed":weatherData.list[0].wind.speed, "weather-icon":weatherData.list[0].weather[0].icon};
    console.log(springfieldWeather);
    document.getElementById("springfield-temp").innerHTML = springfieldWeather["current-temp"];
    document.getElementById("springfield-low").innerHTML = springfieldWeather["low-temp"];
    document.getElementById("springfield-high").innerHTML = springfieldWeather["high-temp"];
    document.getElementById("springfield-wind").innerHTML = springfieldWeather["wind-speed"];
    document.getElementById("springfield-icon").src = 'https://openweathermap.org/img/w/' + springfieldWeather["weather-icon"]+'.png';
}