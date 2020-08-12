import { API_KEY } from './utils.js';

const searchForm = document.querySelector('.search-form');

const fetchCityData = (city) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`).then((response) => response.json())
    .then((data) => console.log(data));
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = searchForm['search-input'].value;
  fetchCityData(inputValue);
});
