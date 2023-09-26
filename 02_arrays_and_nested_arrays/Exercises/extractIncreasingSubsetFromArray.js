function extractIncreasingSubsetFromArray(input) {
    let currentBiggest = Number.MIN_SAFE_INTEGER;

    let output = [];

    for (const number of input) {
        if (number >= currentBiggest) {
            currentBiggest = number;
            output.push(number);
        }
    }

    return output;
}

extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsetFromArray([1, 2, 3,4]);
extractIncreasingSubsetFromArray([20, 3, 2, 15,6, 1]);