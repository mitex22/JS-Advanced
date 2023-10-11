function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function areaAndVolumeCalculator(area, vol, input) {

    let arrOfObjects = JSON.parse(input);

    let resultArray = [];

    for (const obj of arrOfObjects) {
        resultArray.push( { area: area.call(obj), volume: vol.call(obj) } );
    }

    return resultArray;
}

areaAndVolumeCalculator(
    area,
    vol,
    `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);
