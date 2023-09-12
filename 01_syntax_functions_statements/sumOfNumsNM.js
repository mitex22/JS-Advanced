function sumOfNumsNM(...params) {
    let [num1, num2] = [...params].map(Number);
    let result = 0;

    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    console.log(result)
}

sumOfNumsNM('1', '5');
sumOfNumsNM('-8', '20');