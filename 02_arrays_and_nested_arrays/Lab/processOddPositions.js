function processOddPositions(params) {
    let tempArr = [];
    
    params.forEach((currEl, i, self) => {
        if (i % 2 != 0) {
            tempArr.push(currEl * 2);
        }
    })

    console.log(tempArr.reverse().join(' '))
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);