function biggestElement(matrix) {
    let biggestElement = Number.MIN_SAFE_INTEGER;

    for (const innerArray of matrix) {
        let currentBiggestElement = Math.max(...innerArray);
        
        if (currentBiggestElement > biggestElement) {
            biggestElement = currentBiggestElement;
        }
    }

    console.log(biggestElement);
}

biggestElement(
    [
        [20, 50, 10], 
        [8, 33, 145]
    ]
);

biggestElement(
    [
        [3, 5, 7, 12],
        [-1, 4, 33, 2],
        [8, 3, 0, 4]
    ]
);