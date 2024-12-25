window.addEventListener('load', calcTime)
function calcTime() {
    let date = new Date ();
    let dayNumber = date.getDay();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    hours = hours % 12;
    hours = hours < 10 ? '0' + hours : hours;
    mins = mins < 10 ? '0' + mins : mins;

    document.querySelector('#day').textContent = dayNames[dayNumber];
    document.querySelector('#hour').textContent = hours;
    document.querySelector('#min').textContent = mins;
    document.querySelector('#ampm').textContent = ampm
    
    // console.log(hours);
    console.log(date);

    setTimeout(calcTime, 1000);
}
// setTimeout(calcTime, 1000);