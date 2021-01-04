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
        document.body.style.color = 'white';
    } else {
        // Night
        document.body.style.backgroundImage = 'url("img/night.jpg")';
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
    setTimeout(setBgGreet, 1000);
}

// Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Event Listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Init
function init() {
    showTime();
    setBgGreet();
    getName();
    getFocus();
}

init();
