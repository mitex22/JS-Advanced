function lastKnumbersSequence(...params) {
    
    let [n, k] = [...params]

    let arr = [1];

    while (arr.length < n) {
        let temp = 0;

        let startIndex = Math.max(0, arr.length - k);

        arr.push(
            arr.slice(startIndex)
            .reduce((acc, curr) => (acc + curr), 0)
        )
    }

    return arr;
}

lastKnumbersSequence(6, 3);
lastKnumbersSequence(8, 2);
lastKnumbersSequence(16, 4);