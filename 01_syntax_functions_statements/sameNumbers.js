function sameNumbers(...params) {
    
    let strNum = params.toString();

    let digits = strNum.match(/\d/gim)

    let sum = digits.map(Number).reduce((acc, curr) => (acc + curr), 0)

    let uniqueNums = new Set(digits);

    if (uniqueNums.size === 1) {
        console.log('true');        
        console.log(sum);        
    } else {
        console.log('false')
        console.log(sum);        
    }
}

sameNumbers(2222222);
sameNumbers(1234);