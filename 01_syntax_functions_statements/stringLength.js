function stringLength(...params) {
    let stringsCount = params.length;
    let allStringLength = 0;

    for (const str of params) {
        allStringLength += str.length;
    }

    let avgStringLength = Math.floor(allStringLength / stringsCount);

    console.log(allStringLength)
    console.log(avgStringLength)
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');