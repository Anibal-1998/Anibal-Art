function dontWasteTime(){
    const hourElement = document.getElementById("hour-now");
    let getTime = new Date();
    const hours = getTime.getHours().toString().padStart(2, "0");
    const minutes = getTime.getMinutes().toString().padStart(2, "0");
    const seconds = getTime.getSeconds().toString().padStart(2, "0");
    hourElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(dontWasteTime, 1000);
dontWasteTime();