const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const btn = document.querySelector(".btn");
let totalyear = document.querySelector(".total-year");
let totalmonth = document.querySelector(".total-month");
let totalday = document.querySelector(".total-day");

const dateform = document.querySelector("#date-form");

dateform.addEventListener("submit", (e) => {
  e.preventDefault();
  let givenyear = parseInt(year.value);
  let givenMonth = parseInt(month.value);
  let givendate = parseInt(day.value);

  let currentyear = new Date(Date.now()).getFullYear();
  let currentMonth = new Date(Date.now()).getMonth() + 1;
  let currentDate = new Date(Date.now()).getDate();
  let years, months, days;
  if (givenyear <= currentyear && givenMonth <= 12 && givendate <= 31) {
    let arr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    years = currentyear - givenyear;
    if (currentMonth <= givenMonth) {
      months = currentMonth + 12 - givenMonth;
      years = years - 1;
    } else if (currentMonth == givenMonth || currentMonth > givenMonth) {
      months = currentMonth - givenMonth;
    }
    if (currentDate < givendate) {
      months = months - 1;
      days = currentDate + arr[currentMonth - 1] - givendate;
    } else if (currentDate == givendate || currentDate > givendate) {
      days = currentDate - givendate;
    }
    totalday.innerHTML = days;
    totalmonth.innerHTML = months;
    totalyear.innerHTML = years;
  }
  console.log(givendate, givenMonth, givenyear);
  const resetbtn=document.querySelector('.reset');
  resetbtn.addEventListener('click',reset());
});
function reset() {
  dateform.reset();
  totalday.innerHTML = "--";
  totalmonth.innerHTML = "--";
  totalyear.innerHTML = "--";
}

function showError(input, errrorMsg) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector("small");
  small.style.visibility = "visible";
  small.innerText = errrorMsg;
}
function showSuccess(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = ".date-group .success";
}
