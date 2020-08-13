import { API_KEY } from './utils.js';

const searchForm = document.querySelector('.search-form');

const fetchCityData = (city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`).then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { name, weather, main } = data;
      const cityList = document.querySelector('.weather-list');
      const li = document.createElement('li');

      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0].icon
      }.svg`;

      const cityCard = `
      <div class="card">
            <h3 class="city-name">${name}</h3>
            <p class="temperature">${main.temp}°</p>
            <img src='${icon}'>
            <p class="weather">${weather[0].description}</p>
        </div>
      `;

      li.innerHTML = cityCard;
      cityList.appendChild(li);
    }).catch((error) => {
      console.log(error);
    });
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = searchForm['search-input'].value;
  fetchCityData(inputValue);
  inputValue.value = '';
});
