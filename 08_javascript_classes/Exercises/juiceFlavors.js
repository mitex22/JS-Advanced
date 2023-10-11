function juiceFlavors(tokens) {

    let juicesObject = {};

    let juicesSet = new Set();

    for (const token of tokens) {
        let [juiceName, juiceQuantity] = token.split(' => ');
        juiceQuantity = Number(juiceQuantity);

        if (!juicesObject.hasOwnProperty(juiceName)) {
            juicesObject[juiceName] = juiceQuantity;
        } else {
            juicesObject[juiceName] += juiceQuantity;
        }

        if (juicesObject[juiceName] >= 1000) {
            juicesSet.add(juiceName);
        }
    }

    let juicesArray = [...juicesSet];

    for (const juice of juicesArray) {
        console.log(`${juice} => ${Math.floor(juicesObject[juice] / 1000)}`);
    }
}

juiceFlavors(
    [
        'Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]
);

juiceFlavors(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
);