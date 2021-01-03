// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show Time
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();

    // Update Time in HTML
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}`;

    // Repeats showTime every 1000 milliseconds
    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Init
showTime();