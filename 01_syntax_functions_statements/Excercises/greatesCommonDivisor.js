function greatestCommonDivisor(...params) {
    let [num1, num2] = [...params];

    let minNum = Math.min(num1, num2);
    let maxNum = Math.max(num1, num2);

    let gcd = 0;

    for (let i = 0; i <= maxNum; i++) {
        let currNum = i;
        if (num1 % currNum == 0 && num2 % currNum == 0) {
            gcd = currNum;
        }
    }

    console.log(gcd);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);