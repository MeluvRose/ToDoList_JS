const API_KEY = "4960f98119ccac9f76706cb30098e6f9";

function onGeoCool(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  document.getElementById("weather").classList.remove("hidden");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const widget = document.querySelector("#weather");
      const city = widget.querySelector("span:first-child");
      const weather = widget.querySelector("span:last-child");
      const icon = document.createElement("img");

      city.innerText = `${data.name}, ${data.sys.country}`;
      weather.innerText = `${data.weather[0].main} (${data.main.temp}˚C)`;
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      widget.appendChild(icon);
    });
}
function onGeoError() {
  alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoCool, onGeoError);
