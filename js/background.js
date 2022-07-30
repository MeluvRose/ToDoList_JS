const strClock = document.querySelector("#clock").innerText;
const timeZones = { AM: ["dawn", "morning"], PM: ["noon", "evening"] };
const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

function getTimezone(arr) {
  const first = strClock.indexOf(" ");
  const last = strClock.indexOf(":", first + 1);
  const hours = parseInt(strClock.slice(first, last));

  if (hours > 5) {
    return arr[1];
  }
  return arr[0];
}

let arrTimes = timeZones.AM;

if (strClock.includes("PM")) {
  arrTimes = timeZones.PM;
}
const timeZone = getTimezone(arrTimes);
const bgImage = document.createElement("img");
bgImage.src = `img/${timeZone}/${chosenImage}`;
bgImage.className = "background-image";

document.body.appendChild(bgImage);
