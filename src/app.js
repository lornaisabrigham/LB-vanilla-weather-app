let apiKey = "93b4374da9dab6e7d8fc281a4d8ee692";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Brighton&appid=${apiKey}&units=metric`;

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
axios.get(apiUrl).then(displayTemperature);
