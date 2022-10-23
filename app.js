// Get all elements
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const condition = document.querySelector('.condition');
const name = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloud = document.querySelector('.cloud');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const form = document.querySelector('.location-input');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelector('.city');

// default city
let cityInput = 'New York';

// click event to city
cities.forEach((city) => {
  city.onclick = (e) => {
    cityInput = e.target.innerHTML;
    fetchWeatherData();
    app.style.opacity = '0';
  };
});

// add submit event to form
form.onsubmit = (e) => {
  if (search.ariaValueMax.length == 0) {
    alert('Please type a city name');
  } else {
    cityInput = search.value;
    fetchWeatherData();
    search.value = '';
    app.style.opacity = '0';
    e.preventDefault();
  }
};

// function for day month year
const dayOfWeek = (day, month, year) => {
  const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday'];
  return weekDay[new Date(`${day}/${month}/${year}`).getDay()];
};

// api key
const apiKey = `key`;

// fetch data from weather api
const fetchWeatherData = () => {
  fetch(`//api.weatherapi.com/v1/current.json?key=${apiKey}=${cityInput}`);
};
