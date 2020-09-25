function BrlnClock() {
    var BrlnClock = new Date();

    var hours = BrlnClock.getHours();
    var minutes = BrlnClock.getMinutes();
    var seconds = BrlnClock.getSeconds();

    // Making a AM and PM system

    var amPm = (hours < 12) ? "AM" : "PM";

    // Making 12-hour format

    hours = (hours > 12) ? hours - 12 : hours:

    
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Printig the clock

    document.getElementById("clock").innerHTML =
    hours + " : " + minutes " : " + seconds + amPm;


}