const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")

let today = new Date()
let futureDate = new Date(2020, today.getMonth(), today.getDate() + 5, 17, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

giveaway.textContent = `giveaway ends on ${weekdays[futureDate.getDay()]}, ${date} ${months[futureDate.getMonth()]} ${year} ${hours}:${minutes}`;

// Future time


function getRemainingTime() {
  const futureTime = futureDate.getTime();
  const todayTime = new Date().getTime();
  const t = futureTime - todayTime;

  // 1s = 1000ms
  // 1min = 60sec
  // 1hr = 60min
  // 1day = 24hrs

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000)

  // set Values array 
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  })
  if (t < 0) {
    clearInterval(coutdown);
    deadline.innerHTML = `<h4 class="expired">Sorry this Giveaway has expired</h4>`;
  }

}
let coutdown = setInterval(getRemainingTime, 1000);

getRemainingTime();