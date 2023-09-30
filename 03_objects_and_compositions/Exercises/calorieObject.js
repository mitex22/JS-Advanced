function calorieObject(params) {
    
    let tmpObj = {};

    for (let i = 0; i < params.length; i += 2) {
        let foodName = params[i];
        let foodCal = params[i + 1];

        tmpObj[foodName] = Number(foodCal);
    }

    console.log(tmpObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);