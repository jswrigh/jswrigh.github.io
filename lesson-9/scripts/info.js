let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=4156210&units=imperial&APPID=123e236852641b9b3bfd755ffa553566";
weatherRequest.open("GET",apiURL,true);
weatherRequest.send();
weatherRequest.onload =  function () {
 let weatherData = JSON.parse(weatherRequest.responseText);
 console.log(weatherData);
 document.getElementById("franklin-population").innerHTML = weatherData.list[0].main.temp;
}
