function townsToJSON(input) {
    
    let headers = input.shift();

    let tokens = input;

    let contentRegex = /^\| *(?<town>\w+.*\w+) *\| *(?<latitude>\d+\.*\d+) *\| *(?<longitude>\d+\.*\d+)\ *|$/;

    let resultArray = [];

    for (const token of tokens) {
        if (contentRegex.test(token)) {
            let exec = contentRegex.exec(token);

            resultArray.push(
                {
                    "Town": exec.groups.town,
                    "Latitude": Number(Number(exec.groups.latitude).toFixed(2)),
                    "Longitude": Number(Number(exec.groups.longitude).toFixed(2))
                }
            );
        }
    }

    console.log(JSON.stringify(resultArray));

}

townsToJSON(
    [
        '| Town | Latitude | Longitude |',
        '| Sofia|42.696552 | 23.32601|',
        '| Beijing | 39.913818 |116.363625 |'
    ]
);

townsToJSON(
    [
        '| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |'
    ]
);