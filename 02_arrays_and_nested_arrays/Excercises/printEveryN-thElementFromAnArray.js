function printEveryNthElementFromAnArray(...params) {
    let [array, step] = [...params]

    let resultArray = [array[0]];

    for (let i = step; i < array.length; i += step) {
            resultArray.push(array[i]);
    }

    return resultArray;
}

printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);
printEveryNthElementFromAnArray(['dsa','asd', 'test', 'tset'], 2);
printEveryNthElementFromAnArray(['1', '2','3', '4', '5'], 6);
