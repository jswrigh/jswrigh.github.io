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
document.getElementById("greenville-motto").innerHTML = infoData.towns[1].motto;
document.getElementById("greenville-founded").innerHTML = infoData.towns[1].yearFounded;
document.getElementById("greenville-population").innerHTML = infoData.towns[1].currentPopulation;
document.getElementById("greenville-rainfall").innerHTML = infoData.towns[1].averageRainfall;document.getElementById("springfield-motto").innerHTML = infoData.towns[3].motto;
document.getElementById("springfield-founded").innerHTML = infoData.towns[3].yearFounded;
document.getElementById("springfield-population").innerHTML = infoData.towns[3].currentPopulation;
document.getElementById("springfield-rainfall").innerHTML = infoData.towns[3].averageRainfall;
}