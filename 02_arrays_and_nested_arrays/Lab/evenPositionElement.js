function evenPositionElement(input) {
    
    let output = '';

    for (let i = 0; i < input.length; i+=2) {
        output += input[i] + ' ';
    }

    console.log(output);

}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);