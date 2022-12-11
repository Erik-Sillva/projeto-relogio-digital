const days = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const clock = setInterval(function time() {
    let dateToday = new Date();
    let day = dateToday.getDate();
    let mon = dateToday.getMonth() + 1;
    let yea = dateToday.getFullYear();
    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    if (hrs < 10) hrs = '0' + hrs;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    days.innerText = day + '/'
    month.innerText = mon + '/'
    year.innerText = yea
    hours.innerText = hrs
    minutes.innerText = min
    seconds.innerText = sec
})