const API_KEY = "4960f98119ccac9f76706cb30098e6f9";

function onGeoCool(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} (${data.main.temp}˚C)`;
    });
}
function onGeoError() {
  alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoCool, onGeoError);
