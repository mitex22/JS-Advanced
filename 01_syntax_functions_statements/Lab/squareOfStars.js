function squareOfStars(...params) {
    
    let num = params.shift();

    for (let i = 0; i < num; i++) {
        console.log('* '.repeat(num).trim())
    }

}

squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);