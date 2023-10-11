function createAssemblyLine() {
    
    const libObj = {};

    function hasClima(obj) {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = () => {
            if (obj.temp < obj.tempSettings) {
                obj.temp++;
            } else if (obj.temp > obj.tempSettings) {
                obj.temp--;
            }
        }
    }

    function hasAudio(obj) {
        obj.currentTrack = null;
        obj.nowPlaying = () => {
            if (obj.currentTrack !== null) {
                console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
            }
        }
    }

    function hasParktronic(obj) {
        obj.checkDistance = (distance) => {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log("Beep! Beep!");
            } else if (distance >= 0.25 && distance < 0.5) {
                console.log("Beep!");
            } else {
                console.log('');
            }
        }
    }

    libObj.hasClima = hasClima;
    libObj.hasAudio = hasAudio;
    libObj.hasParktronic = hasParktronic;

    return libObj;

    // OR
    // return { hasClima, hasAudio, hasParktronic }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
                
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
