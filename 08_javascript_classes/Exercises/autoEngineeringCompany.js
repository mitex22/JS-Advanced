function autoEngineeringCompany(tokens) {

    let carsObject = {};

    for (const token of tokens) {
        let [car, model, quantity] = token.split(' | ');
        quantity = Number(quantity);

        if (!carsObject.hasOwnProperty(car)) {
            carsObject[car] = { [model]: quantity };
        } else {
            if (!carsObject[car].hasOwnProperty(model)) {
                carsObject[car][model] = quantity;
            } else {
                carsObject[car][model] += quantity;
            }
        }
    }

    for (const car in carsObject) {
        console.log(car);
        for (const model in carsObject[car]) {
            console.log(`###${model} -> ${carsObject[car][model]}`)
        }
    }

}

autoEngineeringCompany(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
);