setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const seconHand = document.querySelector('[data-second-hand]'); 

function setClock(){
     const currentDate = new Date;

     let secondRatio = currentDate.getSeconds() / 60;
     let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
     let hourRatio = (minuteRatio + currentDate.getHours()) / 12;

     setRotation(seconHand, secondRatio);
     setRotation(minuteHand, minuteRatio);
     setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio){
     element.style.setProperty('--rotation', rotationRatio * 360)
}