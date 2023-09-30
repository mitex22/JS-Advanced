function storeCatalogue(tokens) {

    let catalogueObj = {};

    for (const token of tokens) {
        let [product, price] = token.split(' : ');
        price = Number(price);

        if (!catalogueObj.hasOwnProperty(product[0])) {
            catalogueObj[product[0]] = { [product]: price }
        } else {
            catalogueObj[product[0]][product] = price;
        }
    }

    let sortedLetters = Object.keys(catalogueObj).sort((a, b) => (a.toLowerCase().localeCompare(b.toLowerCase())));

    for (const letter of sortedLetters) {
        console.log(letter);

        const ordered = Object
            .keys(catalogueObj[letter])
            .sort((a, b) => (a.toLowerCase().localeCompare(b.toLowerCase())))
            .reduce(
            (obj, key) => {
                obj[key] = catalogueObj[letter][key];
                return obj;
            },
            {}
        );

        for (const prod in ordered) {
            console.log(`  ${prod}: ${ordered[prod]}`);
        }
    }
}

storeCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);

console.log('%%%%%%%%%%%%%%%%%%%%');

storeCatalogue(
    [
        'Banana : 2',
        "Rubic's Cube : 5",
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'
    ]
);