const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();

  isAfternoon(date);
  // const hours = String(date.getHours()).padStart(2, "0");
  // const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");

  // clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function isAfternoon(date) {
  let timezone = "AM";
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (hours > 11 && hours < 24) {
    hours = String(hours - 12).padStart(2, "0");
    timezone = "PM";
  } else {
    hours = String(hours).padStart(2, "0");
  }
  clock.innerText = `${timezone} ${hours}:${minutes}:${seconds}`;
}

getClock(); // Immediately, to see the current time
setInterval(getClock, 1000);
