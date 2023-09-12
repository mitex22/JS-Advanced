function largestNumber(...params) {
    console.log(`The largest number is ${params.reduce((acc, curr) => (acc > curr ? acc : curr), Number.MIN_SAFE_INTEGER)}.`)
}

largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);