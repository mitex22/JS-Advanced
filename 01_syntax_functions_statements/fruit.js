function fruit(...params) {
    
    let [fruit, grams, pricePerKg] = [...params];

    let kiloGrams = grams / 1000;

    console.log(`I need $${(Math.round((pricePerKg * kiloGrams) * 100) / 100).toFixed(2)} to buy ${(Math.round((kiloGrams) * 100) / 100).toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);