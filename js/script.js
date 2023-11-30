
const daysElement = document.querySelector('span#days');
const hoursElement = document.querySelector('span#hours');
const minutesElement = document.querySelector('span#minutes');
const secondsElement = document.querySelector('span#seconds');

const newYearsEveDate = new Date(2024 , 0, 1, 0, 0, 0, 0); 
console.log (newYearsEveDate);
    
    
const timer = setInterval( function(){
    
    const nowDate = new Date();
    const dateDifference = newYearsEveDate.getTime() - nowDate.getTime();

    secondsElement.innerHTML = Math.floor((dateDifference % (60 * 1000)) / 1000);
    minutesElement.innerHTML = Math.floor((dateDifference % (60 * 60 * 1000)) / (1000 * 60));
    hoursElement.innerHTML = Math.floor((dateDifference % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    daysElement.innerHTML = Math.floor((dateDifference / (60 * 60 * 24 * 1000)));

    if ( dateDifference <= 0 ){
        clearInterval(timer);
        document.querySelector('main .text-container h2').innerHTML = 'HAPPY 2024!!';
    }

}, 1000);