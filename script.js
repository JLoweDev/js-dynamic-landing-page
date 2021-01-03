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
    time.innerHTML = `${hour}<span>:</span>${min}`;

    // Repeats showTime every 1000 milliseconds
    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero() {

}

// Init
showTime();