function carFactory(obj) {

    let resultObj = {};

    resultObj.model = obj.model;
    resultObj.engine = buildEngine(obj.power);
    resultObj.carriage = buildCarriage(obj);
    resultObj.wheels = buildWheels(obj.wheelsize);;

    function buildEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 }
        } else if (power > 90 && power <= 120) {
            return { power: 120, volume: 2400 }
        } else {
            return { power: 200, volume: 3500 }
        }
    }

    function buildCarriage(obj) {
        let type = obj.carriage;
        let desiredColor = obj.color;

        if (type === 'hatchback') {
            return { type: 'hatchback', color: desiredColor }
        } else if (type === 'coupe') {
            return { type: 'coupe', color: desiredColor }
        }
    }

    function buildWheels(size) {
        let wheelsArray = [0, 0, 0, 0];
        let realSize = Number(size.toFixed());

        return realSize % 2 !== 0 ? wheelsArray.fill(realSize) : wheelsArray.fill(realSize - 1);

    }

    return resultObj;
}

carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
);

carFactory(
    {

        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
);