function lowestPriceInCities(tokens) {

    let productsObject = {};

    for (const token of tokens) {
        let [town, product, price] = token.split(' | ');

        if (!productsObject.hasOwnProperty(product)) {
            productsObject[product] = [Number(price), town];
        } else {
            if (productsObject[product][0] > Number(price)) {
                productsObject[product] = [Number(price), town]
            }
        }
    }

    for (const key in productsObject) {
        console.log(`${key} -> ${productsObject[key][0]} (${productsObject[key][1]})`);
    }
}

// lowestPriceInCities(
//     [
//         'Sample Town | Sample Product | 1000',
//         'Sample Town | Orange | 2',
//         'Sample Town | Peach | 1',
//         'Sofia | Orange | 3',
//         'Sofia | Peach | 2',
//         'New York | Sample Product | 1000.1',
//         'New York | Burger | 10'
//     ]
// );

lowestPriceInCities(
    [
        'Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'Mexico City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Washington City | Mercedes | 1000'
    ]
);