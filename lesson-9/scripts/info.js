let infoRequest = new XMLHttpRequest();
let jsonURL = "https://byui-cit230.github.io/weather/data/towndata.json";
infoRequest.open("GET",jsonURL,true);
infoRequest.send();
infoRequest.onload =  function () {
let infoData = JSON.parse(infoRequest.responseText);
console.log(infoData);
document.getElementById("franklin-motto").innerHTML = infoData.towns[0].motto;
document.getElementById("franklin-founded").innerHTML = infoData.towns[0].yearFounded;
document.getElementById("franklin-population").innerHTML = infoData.towns[0].currentPopulation;
document.getElementById("franklin-rainfall").innerHTML = infoData.towns[0].averageRainfall;
}