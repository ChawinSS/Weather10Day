const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const locationButton = document.querySelector(".location-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");
const API_KEY = "6fcc2832399f34987e45695eb3b32f61"; // API key for OpenWeatherMap API
/*const createWeatherCard = (cityName, weatherItem, index) => {
    if(index === 0) { // HTML for the main weather card
        return `<div class="details">
                    <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
                    <h6>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </div>
                <div class="icon">
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>${weatherItem.weather[0].description}</h6>
                </div>`;
    } else { // HTML for the other five day forecast card
        return `<li class="card">
                    <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h6>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
                    <h6>Humidity: ${weatherItem.main.humidity}%</h6>
                </li>`;
    }
}*/
async function getWeatherDetails(cityName){
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`;
    //console.log(WEATHER_API_URL);
    const response = await fetch(WEATHER_API_URL);
    var data = await response.json();
console.log(data)

    var dataOpen = document.querySelector('.weather-data');
    if (data) {
        dataOpen.style.display = 'block';
    } else {
        dataOpen.style.display = 'none';}

// currently day 
document.querySelector(".city-main").innerHTML=data.city.name;

const weatherIcon = document.querySelector(".weather-icon-main");

    if(data.list[0].weather[0].main == "Clouds"){
        weatherIcon.src = "media/clouds.png";}
    else if(data.list[0].weather[0].main == "Clear"){
        weatherIcon.src = "media/clear.png"}
    else if(data.list[0].weather[0].main == "Rain"){
        weatherIcon.src = "media/rain.png"}
    else if(data.list[0].weather[0].main == "Drizzle"){
        weatherIcon.src = "media/drizzle.png"}
    else if(data.list[0].weather[0].main == "Mist"){
        weatherIcon.src = "media/mist.png"}
    else if(data.list[0].weather[0].main == "Snow"){
        weatherIcon.src = "media/snow.png"}

let dtTxtValue = data.list[0].dt_txt;
let spaceIndex = dtTxtValue.indexOf(' ');
let result = spaceIndex !== -1 ? dtTxtValue.slice(0, spaceIndex) : dtTxtValue;
document.querySelector(".date-main").innerHTML=result;

let ValueTemp = data.list[0].main.temp;
let calValueTemp=((ValueTemp- 273.15)).toFixed(2)
document.querySelector(".tem-main").innerHTML=`Temperature: ${calValueTemp} C&deg;`;

let ValueWind = data.list[0].wind.speed;
document.querySelector(".wind-main").innerHTML=`Wind Speed: ${ValueWind} M/S`;

let ValueHumidity = data.list[0].main.humidity;
document.querySelector(".humidity-main").innerHTML=`Humidity: ${ValueHumidity} %`;

//day1 forecast 
dtTxtValue = data.list[8].dt_txt;
spaceIndex = dtTxtValue.indexOf(' ');
result = spaceIndex !== -1 ? dtTxtValue.slice(0, spaceIndex) : dtTxtValue;
document.querySelector(".forecast1").innerHTML=result;
ValueTemp = data.list[8].main.temp;
let calValueTemp1=((ValueTemp- 273.15)).toFixed(2)
document.querySelector(".tem1").innerHTML=`Temperature: ${calValueTemp1} C&deg;`;

ValueWind = data.list[8].wind.speed;
document.querySelector(".wind1").innerHTML=`Wind Speed: ${ValueWind} M/S`;

ValueHumidity = data.list[8].main.humidity;
document.querySelector(".humidity1").innerHTML=`Humidity: ${ValueHumidity} %`;

let weatherIcon1 = document.querySelector(".weather-icon1");

    if(data.list[8].weather[0].main === "Clouds"){
        weatherIcon1.src = "media/clouds.png";}
    else if(data.list[8].weather[0].main === "Clear"){
        weatherIcon1.src = "media/clear.png"}
    else if(data.list[8].weather[0].main === "Rain"){
        weatherIcon1.src = "media/rain.png"}
    else if(data.list[8].weather[0].main === "Drizzle"){
        weatherIcon1.src = "media/drizzle.png"}
    else if(data.list[8].weather[0].main === "Mist"){
        weatherIcon1.src = "media/mist.png"}
    else if(data.list[8].weather[0].main === "Snow"){
        weatherIcon1.src = "media/snow.png"}

    console.log(weatherIcon1)

//day2 forecast
dtTxtValue = data.list[16].dt_txt;
spaceIndex = dtTxtValue.indexOf(' ');
result = spaceIndex !== -1 ? dtTxtValue.slice(0, spaceIndex) : dtTxtValue;
document.querySelector(".forecast2").innerHTML=result;
ValueTemp = data.list[16].main.temp;
let calValueTemp2=((ValueTemp- 273.15)).toFixed(2)
document.querySelector(".tem2").innerHTML=`Temperature: ${calValueTemp2} C&deg;`;

ValueWind = data.list[16].wind.speed;
document.querySelector(".wind2").innerHTML=`Wind Speed: ${ValueWind} M/S`;

ValueHumidity = data.list[16].main.humidity;
document.querySelector(".humidity2").innerHTML=`Humidity: ${ValueHumidity} %`;

let weatherIcon2 = document.querySelector(".weather-icon2");

    if(data.list[16].weather[0].main == "Clouds"){
        weatherIcon2.src = "media/clouds.png";}
    else if(data.list[16].weather[0].main == "Clear"){
        weatherIcon2.src = "media/clear.png"}
    else if(data.list[16].weather[0].main == "Rain"){
        weatherIcon2.src = "media/rain.png"}
    else if(data.list[16].weather[0].main == "Drizzle"){
        weatherIcon2.src = "media/drizzle.png"}
    else if(data.list[16].weather[0].main == "Mist"){
        weatherIcon2.src = "media/mist.png"}
    else if(data.list[16].weather[0].main == "Snow"){
        weatherIcon2.src = "media/snow.png"}
//day3 forecast
dtTxtValue = data.list[24].dt_txt;
spaceIndex = dtTxtValue.indexOf(' ');
result = spaceIndex !== -1 ? dtTxtValue.slice(0, spaceIndex) : dtTxtValue;
document.querySelector(".forecast3").innerHTML=result;
ValueTemp = data.list[24].main.temp;
let calValueTemp3=((ValueTemp- 273.15)).toFixed(2)
document.querySelector(".tem3").innerHTML=`Temperature: ${calValueTemp3} C&deg;`;

ValueWind = data.list[24].wind.speed;
document.querySelector(".wind3").innerHTML=`Wind Speed: ${ValueWind} M/S`;

ValueHumidity = data.list[24].main.humidity;
document.querySelector(".humidity3").innerHTML=`Humidity: ${ValueHumidity} %`;

let weatherIcon3 = document.querySelector(".weather-icon3");

    if(data.list[24].weather[0].main == "Clouds"){
        weatherIcon3.src = "media/clouds.png";}
    else if(data.list[24].weather[0].main == "Clear"){
        weatherIcon3.src = "media/clear.png"}
    else if(data.list[24].weather[0].main == "Rain"){
        weatherIcon3.src = "media/rain.png"}
    else if(data.list[24].weather[0].main == "Drizzle"){
        weatherIcon3.src = "media/drizzle.png"}
    else if(data.list[24].weather[0].main == "Mist"){
        weatherIcon3.src = "media/mist.png"}
    else if(data.list[24].weather[0].main == "Snow"){
        weatherIcon3.src = "media/snow.png"}

//day4 forecast
dtTxtValue = data.list[32].dt_txt;
spaceIndex = dtTxtValue.indexOf(' ');
result = spaceIndex !== -1 ? dtTxtValue.slice(0, spaceIndex) : dtTxtValue;
document.querySelector(".forecast4").innerHTML=result;
ValueTemp = data.list[32].main.temp;
let calValueTemp4=((ValueTemp- 273.15)).toFixed(2)
document.querySelector(".tem4").innerHTML=`Temperature: ${calValueTemp4} C&deg;`;

ValueWind = data.list[32].wind.speed;
document.querySelector(".wind4").innerHTML=`Wind Speed: ${ValueWind} M/S`;

ValueHumidity = data.list[32].main.humidity;
document.querySelector(".humidity4").innerHTML=`Humidity: ${ValueHumidity} %`;

let weatherIcon4 = document.querySelector(".weather-icon4");

    if(data.list[32].weather[0].main == "Clouds"){
        weatherIcon4.src = "media/clouds.png";}
    else if(data.list[32].weather[0].main == "Clear"){
        weatherIcon4.src = "media/clear.png"}
    else if(data.list[32].weather[0].main == "Rain"){
        weatherIcon4.src = "media/rain.png"}
    else if(data.list[32].weather[0].main == "Drizzle"){
        weatherIcon4.src = "media/drizzle.png"}
    else if(data.list[32].weather[0].main == "Mist"){
        weatherIcon4.src = "media/mist.png"}
    else if(data.list[32].weather[0].main == "Snow"){
        weatherIcon4.src = "media/snow.png"}
//day5 forecast
dtTxtValue = data.list[39].dt_txt;
spaceIndex = dtTxtValue.indexOf(' ');
result = spaceIndex !== -1 ? dtTxtValue.slice(0, spaceIndex) : dtTxtValue;
document.querySelector(".forecast5").innerHTML=result;
ValueTemp = data.list[39].main.temp;
let calValueTemp5=((ValueTemp- 273.15)).toFixed(2)
document.querySelector(".tem5").innerHTML=`Temperature: ${calValueTemp5} C&deg;`;

ValueWind = data.list[39].wind.speed;
document.querySelector(".wind5").innerHTML=`Wind Speed: ${ValueWind} M/S`;

ValueHumidity = data.list[39].main.humidity;
document.querySelector(".humidity5").innerHTML=`Humidity: ${ValueHumidity} %`;

let weatherIcon5 = document.querySelector(".weather-icon5");

    if(data.list[39].weather[0].main == "Clouds"){
        weatherIcon5.src = "media/clouds.png";}
    else if(data.list[39].weather[0].main == "Clear"){
        weatherIcon5.src = "media/clear.png"}
    else if(data.list[39].weather[0].main == "Rain"){
        weatherIcon5.src = "media/rain.png"}
    else if(data.list[39].weather[0].main == "Drizzle"){
        weatherIcon5.src = "media/drizzle.png"}
    else if(data.list[39].weather[0].main == "Mist"){
        weatherIcon5.src = "media/mist.png"}
    else if(data.list[39].weather[0].main == "Snow"){
        weatherIcon5.src = "media/snow.png"}
}
const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();
    if (cityName === "") return;
    const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    
    // Get entered city coordinates (latitude, longitude, and name) from the API response
    fetch(API_URL).then(response => response.json()).then(data => {
        if (!data.length) return alert(`No coordinates found for ${cityName}`);
        const { name } = data[0];
        getWeatherDetails(name);
        //only for test
        console.log({name });
    }).catch(() => {
        alert("An error occurred while fetching the coordinates!");
    });
}
const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords; // Get coordinates of user location
            // Get city name from coordinates using reverse geocoding API
            const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
            fetch(API_URL).then(response => response.json()).then(data => {
                const { name } = data[0];
                getWeatherDetails(name);
                //only for test
                console.log({ name });
            }).catch(() => {
                alert("An error occurred while fetching the city name!");
            });
        },
        error => { // Show alert if user denied the location permission
            if (error.code === error.PERMISSION_DENIED) {
                alert("Geolocation request denied. Please reset location permission to grant access again.");
            } else {
                alert("Geolocation request error. Please reset location permission.");
            }
        });
}
locationButton.addEventListener("click", getUserCoordinates);
searchButton.addEventListener("click", getCityCoordinates);
cityInput.addEventListener("keyup", e => e.key === "Enter" && getCityCoordinates());