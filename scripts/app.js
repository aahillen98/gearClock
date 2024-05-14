const container = document.querySelector(".container");
//hands
let hrHand = document.getElementById("hour");
let secHand = document.getElementById("second");
let minHand = document.getElementById("minute");
let timeId;
// Get & display the current time
const getTime = () => {
    let today = new Date();
    let hr = today.getHours() % 12 || 12; // 12 hour format
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let hrDegree = 30 * hr; 
    let minDegree = 6 * min;
    let secDegree = 6 * sec;
    // position clock hands 
    hrHand.style.transform = `rotate(${hrDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    secHand.style.transform = `rotate(${secDegree}deg)`;
}
// Position numbers
const settings = () => {
   for (i = 0; i < 12; i++) {
    document.querySelector(".oclock" + i).style.transform = `rotate(${i * 30}deg)`;
   }
}
window.addEventListener("load", () => {
    settings();
    timerId = setInterval(getTime, 1000);
})

