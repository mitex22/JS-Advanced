function biggerHalf(input) {
    
    let half = input.length / 2; 

    input.sort((a, b) => (a - b));

    let output = [];

    if (Number.isInteger(half)) {
        for (let i = half; i < input.length; i++) {
            output.push(input[i]);
        }        
    } else {
        for (let i = Math.ceil(half) - 1; i < input.length; i++) {
            output.push(input[i]);
        }
    }

    return output;

}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));