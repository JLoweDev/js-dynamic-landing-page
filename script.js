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

// Set Background and Greeting
function setBgGreet() {
    let today = new Date();
    let hour = today.getHours();
    if(hour >= 6 && hour < 11) {
        // Morning
        document.body.style.backgroundImage = 'url("img/morning.jpg")';
        greeting.textContent = 'Good Morning';
    } else if(hour >= 11 && hour < 18) {
        // Midday
        document.body.style.backgroundImage = 'url("img/midday.jpg")';
        greeting.textContent = 'Good Day';
    } else if(hour >= 18 && hour < 22) {
        // Evening
        document.body.style.backgroundImage = 'url("img/evening.jpg")';
        greeting.textContent = 'Good Evening';
    } else {
        // Night
        document.body.style.backgroundImage = 'url("img/night.jpg")';
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
    setTimeout(setBgGreet, 1000);
}

// Init
showTime();
setBgGreet();