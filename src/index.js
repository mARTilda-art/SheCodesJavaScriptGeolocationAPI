const axios = require("axios");

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `The outside temperature is ${temperature} degrees.`;
}

function showPosition(position) {
  let apiKey = "54fc91d14fe02d75665772e36d182ac8";
  let units = "metric";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrlStart = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiUrlStart}lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);

// button
//let button = document.querySelector("button");
//button.addEventListener("click", getCurrentPosition);
