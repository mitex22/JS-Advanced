function sortingNumbers(input) {
    
    let sortedCopy = [... input].sort((a, b) => (a - b));

    let output = [];

    for (let i = 0; i < input.length / 2; i++) {

        output.push(sortedCopy.shift());
        output.push(sortedCopy.pop());

    }

    return output;

}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);