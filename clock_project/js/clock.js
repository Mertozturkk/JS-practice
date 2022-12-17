let name = prompt("Please enter your name: ");
document.querySelector("#myName").innerHTML = `${name} `;

function showTime(){

    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = today.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[day];

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;



    document.getElementById("myClock").innerText = `${hours}:${minutes}:${seconds}  ${dayName}`;
}

setInterval(showTime, 1000);