// ----------------RELÓGIO----------------//
const clock = setInterval(function time() {
    const days = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

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

// ----------------CRONÔMETRO----------------//

const hrsctxt = document.querySelector('#hours-c');
const minctxt = document.querySelector('#minutes-c');
const secctxt = document.querySelector('#seconds-c');
const mlsctxt = document.querySelector('#milisegundos-c');
let hrsc = 0
let minc = 0
let secc = 0
let mlsc = 0
let interval

function start() {
    interval = setInterval(function () {
        mlsc++
        if (mlsc==100) {
            secc++
            if (secc<10) {
                secc = '0' + secc
            }
            mlsc=0
        }else if (secc==60) {
            minc++
            if (minc<10) {
                minc = '0' + minc
            }
            secc=0
        } else if (minc==60) {
            hrsc++
            if (hrsc<10) {
                hrsc = '0' + hrsc
            }
            minc=0
        }
        mlsctxt.innerText = mlsc
        secctxt.innerText = secc
        minctxt.innerText = minc
        hrsctxt.innerText = hrsc
    })
}

function pause() {
    clearInterval(interval)
}
function reset() {
    clearInterval(interval)
    hrsc = 0
    minc = 0
    secc = 0
    mlsc = 0

    mlsctxt.innerText = mlsc
    secctxt.innerText = secc
    minctxt.innerText = minc
    hrsctxt.innerText = hrsc
}