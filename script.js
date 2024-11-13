// script.js

// API configuration (Placeholder for real interaction)
const API_KEY = "your_api_key"; // Replace with actual key
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const locationBtn = document.getElementById("location-btn");
const cityNameElem = document.getElementById("city-name");
const tempElem = document.getElementById("temperature");
const descElem = document.getElementById("description");
const humidityElem = document.getElementById("humidity");
const weatherIconElem = document.getElementById("weather-icon");
const loadingSpinner = document.getElementById("loading-spinner");

function fakeWeatherData() {
    return {
        name: "Metropolis",
        main: { temp: 25, humidity: 45 },
        weather: [{ description: "clear sky", icon: "01d" }],
    };
}

async function getWeatherData(city) {
    loadingSpinner.classList.remove("hidden");
    setTimeout(() => {
        const data = fakeWeatherData();
        displayWeather(data);
        loadingSpinner.classList.add("hidden");
    }, 2000); // Simulate API response time
}

function displayWeather(data) {
    cityNameElem.textContent = `City: ${data.name}`;
    tempElem.textContent = `Temperature: ${data.main.temp}°C`;
    descElem.textContent = `Weather: ${data.weather[0].description}`;
    humidityElem.textContent = `Humidity: ${data.main.humidity}%`;
    weatherIconElem.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) getWeatherData(city);
});
