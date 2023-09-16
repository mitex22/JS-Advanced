function timeToWalks(...params) {
    let [steps, stepLength, speed] = [... params];

    let distanceM = steps * stepLength;
    let distanceKm = (steps * stepLength) / 1000;

    let breaksTotal = Math.floor(distanceM / 500);

    let timeHours = distanceKm / speed;

    let timeMinute = timeHours * 60 + breaksTotal;

    let timeSeconds = Math.ceil(timeMinute * 60);

    let timeStr = timeSeconds.toString();

    String.prototype.toHHMMSS = function () {
        var sec_num = parseInt(this, 10);
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
        if (hours < 10) {hours = "0" + hours;}
        if (minutes < 10) {minutes = "0" + minutes;}
        if (seconds < 10) {seconds = "0" + seconds;}
        return hours + ':' + minutes + ':' +seconds;
    }

    console.log(timeStr.toHHMMSS());

}

timeToWalks(4000, 0.60, 5);
timeToWalks(2564, 0.70, 5.5);