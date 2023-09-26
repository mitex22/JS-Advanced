function listOfNames(input) {
    
    input.sort((a, b) => (a.toLowerCase().localeCompare(b.toLowerCase()))).forEach((element, index) => {
        console.log(`${index + 1}.${element}`)
    });

}

listOfNames(["John", "Bob", "Christina", "Ema"]);