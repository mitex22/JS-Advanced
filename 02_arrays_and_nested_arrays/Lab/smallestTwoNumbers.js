function smallestTwoNumbers(input) {
    input.sort((a, b) => (a - b));

    let num1 = input.shift();
    let num2 = input.shift();

    console.log(`${num1} ${num2}`)
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);