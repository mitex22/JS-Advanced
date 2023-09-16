function circleArea(...params) {

    let paramType = typeof params[0];
    let radius = params[0];

    if (paramType != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${paramType}.`)
    } else {
        console.log(Math.round((radius ** 2 * Math.PI) * 100) / 100)
    }
}

circleArea(5);
circleArea('name');