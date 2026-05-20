//Target date − Current date = Time remaining

// to set countdown date a by adding sec to the curent date. (from RIGHT NOW)
let countdownDate = new Date().setSeconds(new Date().getSeconds() + 14);

let timerInterval;
let daysElem,
  hoursElem,
  minutesElem,
  secondsElem,
  timerRunningCont,
  timerEndCont;

//run this when the window first load
window.addEventListener("load", () => {
  //get the elem from the dom
  daysElem = document.querySelector("#days");
  hoursElem = document.querySelector("#hours");
  minutesElem = document.querySelector("#minutes");
  secondsElem = document.querySelector("#seconds");
  timerRunningCont = document.querySelector("#timer-running");
  timerEndCont = document.querySelector("#timer-end");
  startCountDown();

  //start countdown every sec
  timerInterval = setInterval(startCountDown, 1000);
});

//plural or singular

const formatTime = (time, str) => {
  return time === 1
    ? `<span>${time}</span> ${str}`
    : `<span>${time}</span> ${str}s`;
};

//the fun that make the substraction at an interval of 1 sec Calculate the Difference
const startCountDown = () => {
  //get the current date in milliseconds
  const now = new Date().getTime();
  const target = new Date(countdownDate).getTime(); // target time in ms
  const difference = (target - now) / 1000; //calculate the differnece between current date and count down date(target)

  if (difference < 1) {
    endCountDown();
    return;
  }

  //Break Seconds Into Days / Hours / Minutes / Seconds
  let days = Math.floor(difference / (60 * 60 * 24)); // 60sec × 60min × 24hrs = 86,400sec → câte zile întregi încap
  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60)); // scoate zilele, apoi împarte la 3600 (60×60) → câte ore întregi încap
  let minutes = Math.floor((difference % (60 * 60)) / 60); // scoate orele, apoi împarte la 60 → câte minute întregi încap
  let seconds = Math.floor(difference % 60);

  //updates
  daysElem.innerHTML = formatTime(days, "day");
  hoursElem.innerHTML = formatTime(hours, "hour");
  minutesElem.innerHTML = formatTime(minutes, "minute");
  secondsElem.innerHTML = formatTime(seconds, "second");
};

const endCountDown = () => {
  clearInterval(timerInterval);
  timerRunningCont.classList.add("hidden");
  timerEndCont.classList.add("visible");
};

//when the timer end hide de first content and show another one
