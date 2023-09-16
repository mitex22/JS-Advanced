function aggregateElements(params) {
    
    let sum = params.reduce((acc, curr) => (acc + curr), 0);

    let sum1OverNum = 0;
    
    for (const num of params) {
        sum1OverNum += 1 / num;    
    }

    let concatNums = params.reduce((a, b) => (a + b), '')

    console.log(sum);
    console.log(sum1OverNum);
    console.log(concatNums);
}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])