


function BrlnClock() {
    let Clockbrln = new Date();

    let hours = Clockbrln.getHours();
    let minutes = Clockbrln.getMinutes();
    let seconds = Clockbrln.getSeconds();

    // Making a AM and PM system

    let amPm = (hours < 12) ? "AM" : "PM";
   
    // Making 12-hour format

    hours = (hours > 12) ? hours - 12 : hours;

    
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Printig the clock

    document.getElementById("clock").innerHTML =
    hours + " : " + minutes + " : " + seconds + " " + amPm;

    let t = setTimeout(BrlnClock, 500);


}




