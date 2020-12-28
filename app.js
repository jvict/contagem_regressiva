const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');
const nextYearContainer =document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const countDownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear()+1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

nextYearContainer.textContent = nextYear;

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertCountValues = ({days,hours,minutes,seconds}) => {
    daysContainer.textContent = getTimeUnit(days);
    hoursContainer.textContent = getTimeUnit(hours);
    minutesContainer.textContent = getTimeUnit(minutes);
    secondsContainer.textContent = getTimeUnit(seconds);

}

const updateCountdown = () =>{
    
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;
    
    insertCountValues({days,hours,minutes,seconds});
}

const handleCountDownDisplay = () =>{
    spinnerLoading.remove();
    countDownContainer.style.display ='flex';
}

setTimeout(handleCountDownDisplay,1000)

setInterval(updateCountdown,1000)